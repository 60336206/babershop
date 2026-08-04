package com.epiis.apibarbershop.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import com.epiis.apibarbershop.business.BusinessBarberSchedule;
import com.epiis.apibarbershop.dto.request.RequestBarberScheduleInsert;
import com.epiis.apibarbershop.dto.request.RequestBarberScheduleUpdate;
import com.epiis.apibarbershop.dto.response.*;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class BarberScheduleControllerTest {

    @InjectMocks
    private BarberScheduleController target;

    @Mock
    private BusinessBarberSchedule businessBarberSchedule;

    @Test
    void testInsert_Success() {
        ResponseBarberScheduleInsert resMock = new ResponseBarberScheduleInsert();
        when(businessBarberSchedule.insert(any())).thenReturn(resMock);
        ResponseEntity<ResponseBarberScheduleInsert> res = target.actionInsert(new RequestBarberScheduleInsert());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testInsert_Exception() {
        when(businessBarberSchedule.insert(any())).thenThrow(new RuntimeException());
        assertNull(target.actionInsert(new RequestBarberScheduleInsert()));
    }

    @Test
    void testUpdate_Success() {
        ResponseBarberScheduleUpdate resMock = new ResponseBarberScheduleUpdate();
        when(businessBarberSchedule.update(any())).thenReturn(resMock);
        ResponseEntity<ResponseBarberScheduleUpdate> res = target.actionUpdate(new RequestBarberScheduleUpdate());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testUpdate_Exception() {
        when(businessBarberSchedule.update(any())).thenThrow(new RuntimeException());
        assertNull(target.actionUpdate(new RequestBarberScheduleUpdate()));
    }

    @Test
    void testDelete_Success() {
        ResponseBarberScheduleDelete resMock = new ResponseBarberScheduleDelete();
        when(businessBarberSchedule.delete(anyString())).thenReturn(resMock);
        ResponseEntity<ResponseBarberScheduleDelete> res = target.actionDelete("1");
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testDelete_Exception() {
        when(businessBarberSchedule.delete(anyString())).thenThrow(new RuntimeException());
        assertNull(target.actionDelete("1"));
    }

    @Test
    void testGetAll_Success() {
        ResponseBarberScheduleGetAll resMock = new ResponseBarberScheduleGetAll();
        when(businessBarberSchedule.getall()).thenReturn(resMock);
        ResponseEntity<ResponseBarberScheduleGetAll> res = target.actionGetAll();
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetAll_Exception() {
        when(businessBarberSchedule.getall()).thenThrow(new RuntimeException());
        assertNull(target.actionGetAll());
    }

    @Test
    void testGetByBarber_Success() {
        ResponseBarberScheduleGetAll resMock = new ResponseBarberScheduleGetAll();
        when(businessBarberSchedule.getbybarber(anyString())).thenReturn(resMock);
        ResponseEntity<ResponseBarberScheduleGetAll> res = target.actionGetByBarber("1");
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetByBarber_Exception() {
        when(businessBarberSchedule.getbybarber(anyString())).thenThrow(new RuntimeException());
        assertNull(target.actionGetByBarber("1"));
    }

    @Test
    void testAvailableHours_Success() {
        ResponseAvailableHours resMock = new ResponseAvailableHours();
        when(businessBarberSchedule.getAvailableHours(anyString(), anyString())).thenReturn(resMock);
        ResponseEntity<ResponseAvailableHours> res = target.actionGetAvailableHours("1", "2026-08-01");
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testAvailableHours_Exception() {
        when(businessBarberSchedule.getAvailableHours(anyString(), anyString())).thenThrow(new RuntimeException());
        assertNull(target.actionGetAvailableHours("1", "2026-08-01"));
    }
}
