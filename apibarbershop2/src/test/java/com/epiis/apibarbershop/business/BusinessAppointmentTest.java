package com.epiis.apibarbershop.business;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.sql.Time;
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
}
