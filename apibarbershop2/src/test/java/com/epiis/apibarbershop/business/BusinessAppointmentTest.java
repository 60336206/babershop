package com.epiis.apibarbershop.business;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;

import com.epiis.apibarbershop.dto.request.RequestAppointmentInsert;
import com.epiis.apibarbershop.dto.request.RequestAppointmentUpdate;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentDelete;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentGetAll;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentGetOne;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentInsert;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentUpdate;
import com.epiis.apibarbershop.entity.EntityAppointment;
import com.epiis.apibarbershop.entity.EntityCustomer;
import com.epiis.apibarbershop.entity.EntitySetting;
import com.epiis.apibarbershop.repository.RepositoryAppointment;
import com.epiis.apibarbershop.repository.RepositoryAppointmentDetail;
import com.epiis.apibarbershop.repository.RepositoryCustomer;
import com.epiis.apibarbershop.repository.RepositorySetting;
import com.epiis.apibarbershop.service.TwilioService;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class BusinessAppointmentTest {

    @InjectMocks
    private BusinessAppointment target;

    @Mock
    private RepositoryAppointment repositoryAppointment;
    @Mock
    private RepositoryAppointmentDetail repositoryAppointmentDetail;
    @Mock
    private RepositoryCustomer repositoryCustomer;
    @Mock
    private RepositorySetting repositorySetting;
    @Mock
    private TwilioService twilioService;

    @BeforeEach
    void setUp() {
        EntityAppointment appointment = new EntityAppointment();
        appointment.setIdAppointment("app-id");
        appointment.setIdCustomer("customer-id");
        appointment.setIdUser("user-id");
        appointment.setAppointmentDate(Date.valueOf("2026-09-01"));
        appointment.setStartHour(Time.valueOf("10:00:00"));
        appointment.setEndHour(Time.valueOf("11:00:00"));

        EntitySetting setting = new EntitySetting();
        setting.setOpenHour(Time.valueOf("08:00:00"));
        setting.setCloseHour(Time.valueOf("18:00:00"));

        lenient().when(repositoryAppointment.findById(anyString())).thenReturn(Optional.of(appointment));
        lenient().when(repositoryAppointment.findAll()).thenReturn(List.of(appointment));
        lenient().when(repositorySetting.findAll()).thenReturn(List.of(setting));
    }

    @Test
    void testInsert_Success() {
        RequestAppointmentInsert req = new RequestAppointmentInsert();
        req.setAppointmentDate("2026-09-01");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentInsert res = target.insert(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testInsert_PastDate() {
        RequestAppointmentInsert req = new RequestAppointmentInsert();
        req.setAppointmentDate("2000-01-01");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_Success() {
        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("12:00");
        req.setEndHour("13:00");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_Validation() {
        when(repositoryAppointment.findById(anyString())).thenReturn(Optional.empty());
        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testDelete_Success() {
        ResponseAppointmentDelete res = target.delete("app-id");
        assertEquals("success", res.getType());
    }

    @Test
    void testDelete_NotFound() {
        when(repositoryAppointment.findById(anyString())).thenReturn(Optional.empty());
        ResponseAppointmentDelete res = target.delete("app-id");
        assertEquals("error", res.getType());
    }

    @Test
    void testGetAll() {
        ResponseAppointmentGetAll res = target.getall();
        assertEquals("success", res.getType());
    }

    @Test
    void testGetOne() {
        ResponseAppointmentGetOne res = target.getone("app-id");
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_NotificationException() {
        when(repositoryCustomer.findById(anyString())).thenThrow(new RuntimeException("boom"));

        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setStatus("Confirmada");
        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testInsert_TooFarFuture() {
        RequestAppointmentInsert req = new RequestAppointmentInsert();
        req.setAppointmentDate("2030-01-01");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_SameDayPastHour() {
        RequestAppointmentInsert req = new RequestAppointmentInsert();
        req.setAppointmentDate(LocalDate.now().toString());
        req.setStartHour("00:00");
        req.setEndHour("01:00");

        ResponseAppointmentInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_OutsideBusinessHours() {
        RequestAppointmentInsert req = new RequestAppointmentInsert();
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("07:00");
        req.setEndHour("08:00");

        ResponseAppointmentInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_BusinessHoursSettingsEmpty() {
        when(repositorySetting.findAll()).thenReturn(List.of());

        RequestAppointmentInsert req = new RequestAppointmentInsert();
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentInsert res = target.insert(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testInsert_Overlap() {
        EntityAppointment existing = new EntityAppointment();
        existing.setIdAppointment("other-app");
        existing.setStartHour(Time.valueOf("10:00:00"));
        existing.setEndHour(Time.valueOf("11:00:00"));
        when(repositoryAppointment.findByIdUserAndAppointmentDate(anyString(), any()))
                .thenReturn(List.of(existing));

        RequestAppointmentInsert req = new RequestAppointmentInsert();
        req.setIdUser("user-id");
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("10:30");
        req.setEndHour("11:30");

        ResponseAppointmentInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_NoOverlap() {
        EntityAppointment existing = new EntityAppointment();
        existing.setIdAppointment("other-app");
        existing.setStartHour(Time.valueOf("12:00:00"));
        existing.setEndHour(Time.valueOf("13:00:00"));
        when(repositoryAppointment.findByIdUserAndAppointmentDate(anyString(), any()))
                .thenReturn(List.of(existing));

        RequestAppointmentInsert req = new RequestAppointmentInsert();
        req.setIdUser("user-id");
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentInsert res = target.insert(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_StatusOnly() {
        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setStatus("Pendiente");
        req.setPaymentStatus("Pagado");
        req.setPaymentMethod("Yape");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_InvalidDateFormat() {
        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setAppointmentDate("2026/09/02");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_MoveToPast() {
        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setAppointmentDate("2000-01-01");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_TooFarFuture() {
        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setAppointmentDate("2030-01-01");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_SameDayPastHour() {
        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setAppointmentDate(LocalDate.now().toString());
        req.setStartHour("00:00");
        req.setEndHour("01:00");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_OutsideBusinessHours() {
        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("07:00");
        req.setEndHour("08:00");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_SettingsEmpty() {
        when(repositorySetting.findAll()).thenReturn(List.of());

        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_Overlap() {
        EntityAppointment existing = new EntityAppointment();
        existing.setIdAppointment("other-app");
        existing.setStartHour(Time.valueOf("10:00:00"));
        existing.setEndHour(Time.valueOf("11:00:00"));
        when(repositoryAppointment.findByIdUserAndAppointmentDate(anyString(), any()))
                .thenReturn(List.of(existing));

        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("10:30");
        req.setEndHour("11:30");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_NoOverlap() {
        EntityAppointment existing = new EntityAppointment();
        existing.setIdAppointment("other-app");
        existing.setStartHour(Time.valueOf("12:00:00"));
        existing.setEndHour(Time.valueOf("13:00:00"));
        when(repositoryAppointment.findByIdUserAndAppointmentDate(anyString(), any()))
                .thenReturn(List.of(existing));

        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_NotificationSuccess() {
        EntityCustomer customer = new EntityCustomer();
        customer.setPhone("987654321");
        customer.setFirstName("Juan");
        when(repositoryCustomer.findById(anyString())).thenReturn(Optional.of(customer));

        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setStatus("Confirmada");
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_NotificationNoPhone() {
        EntityCustomer customer = new EntityCustomer();
        when(repositoryCustomer.findById(anyString())).thenReturn(Optional.of(customer));

        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setStatus("Confirmada");
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_NotificationCustomerNotFound() {
        when(repositoryCustomer.findById(anyString())).thenReturn(Optional.empty());

        RequestAppointmentUpdate req = new RequestAppointmentUpdate();
        req.setIdAppointment("app-id");
        req.setStatus("Confirmada");
        req.setAppointmentDate("2026-09-02");
        req.setStartHour("10:00");
        req.setEndHour("11:00");

        ResponseAppointmentUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testGetOne_NotFound() {
        when(repositoryAppointment.findById(anyString())).thenReturn(Optional.empty());
        ResponseAppointmentGetOne res = target.getone("app-id");
        assertEquals("error", res.getType());
    }

    @Test
    void testGetByBarber() {
        ResponseAppointmentGetAll res = target.getbybarber("user-id");
        assertEquals("success", res.getType());
    }
}
