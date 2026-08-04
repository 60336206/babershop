package com.epiis.apibarbershop.business;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

import java.sql.Time;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.epiis.apibarbershop.dto.request.RequestBarberScheduleInsert;
import com.epiis.apibarbershop.dto.request.RequestBarberScheduleUpdate;
import com.epiis.apibarbershop.dto.response.ResponseAvailableHours;
import com.epiis.apibarbershop.dto.response.ResponseBarberScheduleDelete;
import com.epiis.apibarbershop.dto.response.ResponseBarberScheduleGetAll;
import com.epiis.apibarbershop.dto.response.ResponseBarberScheduleInsert;
import com.epiis.apibarbershop.dto.response.ResponseBarberScheduleUpdate;
import com.epiis.apibarbershop.entity.EntityAppointment;
import com.epiis.apibarbershop.entity.EntityBarberSchedule;
import com.epiis.apibarbershop.repository.RepositoryAppointment;
import com.epiis.apibarbershop.repository.RepositoryBarberSchedule;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class BusinessBarberScheduleTest {

    @InjectMocks
    private BusinessBarberSchedule target;

    @Mock
    private RepositoryBarberSchedule repositoryBarberSchedule;

    @Mock
    private RepositoryAppointment repositoryAppointment;

    @BeforeEach
    void setUp() {
        EntityBarberSchedule schedule = new EntityBarberSchedule();
        schedule.setIdBarberSchedule("schedule-id");
        schedule.setIdUser("user-id");
        schedule.setDayName("Lunes");
        schedule.setStartHour(Time.valueOf("09:00:00"));
        schedule.setEndHour(Time.valueOf("18:00:00"));

        lenient().when(repositoryBarberSchedule.findById(anyString())).thenReturn(Optional.of(schedule));
        lenient().when(repositoryBarberSchedule.findAll()).thenReturn(List.of(schedule));
        lenient().when(repositoryBarberSchedule.findByIdUserAndDayName(anyString(), anyString())).thenReturn(List.of());
        lenient().when(repositoryBarberSchedule.save(any())).thenReturn(schedule);
    }

    @Test
    void testInsert_Success() {
        RequestBarberScheduleInsert req = new RequestBarberScheduleInsert();
        req.setIdUser("user-id");
        req.setDayName("Martes");
        req.setStartHour("09:00:00");
        req.setEndHour("18:00:00");

        ResponseBarberScheduleInsert res = target.insert(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testInsert_Validation_MissingUser() {
        RequestBarberScheduleInsert req = new RequestBarberScheduleInsert();
        req.setDayName("Martes");
        req.setStartHour("09:00:00");
        req.setEndHour("18:00:00");

        ResponseBarberScheduleInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_Success() {
        RequestBarberScheduleUpdate req = new RequestBarberScheduleUpdate();
        req.setIdBarberSchedule("schedule-id");
        req.setDayName("Martes");
        req.setStartHour("10:00:00");
        req.setEndHour("17:00:00");

        ResponseBarberScheduleUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_Validation_NotFound() {
        when(repositoryBarberSchedule.findById(anyString())).thenReturn(Optional.empty());
        RequestBarberScheduleUpdate req = new RequestBarberScheduleUpdate();
        req.setIdBarberSchedule("schedule-id");

        ResponseBarberScheduleUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testDelete_Success() {
        ResponseBarberScheduleDelete res = target.delete("schedule-id");
        assertEquals("success", res.getType());
    }

    @Test
    void testDelete_NotFound() {
        when(repositoryBarberSchedule.findById(anyString())).thenReturn(Optional.empty());
        ResponseBarberScheduleDelete res = target.delete("schedule-id");
        assertEquals("error", res.getType());
    }

    @Test
    void testGetAll() {
        ResponseBarberScheduleGetAll res = target.getall();
        assertEquals("success", res.getType());
    }

    @Test
    void testGetByBarber() {
        ResponseBarberScheduleGetAll res = target.getbybarber("user-id");
        assertEquals("success", res.getType());
    }

    @Test
    void testGetAvailableHours_Success() {
        EntityBarberSchedule schedule = new EntityBarberSchedule();
        schedule.setIdBarberSchedule("schedule-id");
        schedule.setIdUser("user-id");
        schedule.setDayName("Lunes");
        schedule.setStartHour(Time.valueOf("09:00:00"));
        schedule.setEndHour(Time.valueOf("18:00:00"));
        
        when(repositoryBarberSchedule.findByIdUserAndDayName(anyString(), anyString())).thenReturn(List.of(schedule));
        
        EntityAppointment app = new EntityAppointment();
        app.setStartHour(Time.valueOf("10:00:00"));
        app.setEndHour(Time.valueOf("11:00:00"));

        when(repositoryAppointment.findByIdUserAndAppointmentDate(anyString(), any())).thenReturn(List.of(app));

        // Note: 2026-08-03 is a Monday, so it maps to "Lunes"
        ResponseAvailableHours res = target.getAvailableHours("user-id", "2026-08-03");
        assertEquals("success", res.getType());
    }
}
