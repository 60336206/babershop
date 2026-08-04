package com.epiis.apibarbershop.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import com.epiis.apibarbershop.business.BusinessAppointment;
import com.epiis.apibarbershop.dto.request.RequestAppointmentInsert;
import com.epiis.apibarbershop.dto.request.RequestAppointmentUpdate;
import com.epiis.apibarbershop.dto.response.*;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class AppointmentControllerTest {

    @InjectMocks
    private AppointmentController target;

    @Mock
    private BusinessAppointment businessAppointment;

    @BeforeEach
    void setUp() {
        ResponseAppointmentInsert resInsert = new ResponseAppointmentInsert();
        resInsert.success();
        lenient().when(businessAppointment.insert(any())).thenReturn(resInsert);

        ResponseAppointmentUpdate resUpdate = new ResponseAppointmentUpdate();
        resUpdate.success();
        lenient().when(businessAppointment.update(any())).thenReturn(resUpdate);

        ResponseAppointmentDelete resDelete = new ResponseAppointmentDelete();
        resDelete.success();
        lenient().when(businessAppointment.delete(anyString())).thenReturn(resDelete);

        ResponseAppointmentGetAll resGetAll = new ResponseAppointmentGetAll();
        resGetAll.success();
        lenient().when(businessAppointment.getall()).thenReturn(resGetAll);
        lenient().when(businessAppointment.getbybarber(anyString())).thenReturn(resGetAll);

        ResponseAppointmentGetOne resGetOne = new ResponseAppointmentGetOne();
        resGetOne.success();
        lenient().when(businessAppointment.getone(anyString())).thenReturn(resGetOne);
    }

    @Test
    void testInsert_Success() {
        ResponseEntity<ResponseAppointmentInsert> res = target.actionInsert(new RequestAppointmentInsert());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testInsert_Exception() {
        when(businessAppointment.insert(any())).thenThrow(new RuntimeException("Error"));
        ResponseEntity<ResponseAppointmentInsert> res = target.actionInsert(new RequestAppointmentInsert());
        assertEquals(500, res.getStatusCode().value());
        assertNotNull(res.getBody());
        assertEquals("exception", res.getBody().getType());
    }

    @Test
    void testUpdate_Success() {
        ResponseEntity<ResponseAppointmentUpdate> res = target.actionUpdate(new RequestAppointmentUpdate());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testUpdate_Exception() {
        when(businessAppointment.update(any())).thenThrow(new RuntimeException("Error"));
        ResponseEntity<ResponseAppointmentUpdate> res = target.actionUpdate(new RequestAppointmentUpdate());
        assertEquals(500, res.getStatusCode().value());
        assertNotNull(res.getBody());
        assertEquals("exception", res.getBody().getType());
    }

    @Test
    void testDelete_Success() {
        ResponseEntity<ResponseAppointmentDelete> res = target.actionDelete("test-id");
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testDelete_Exception() {
        when(businessAppointment.delete(anyString())).thenThrow(new RuntimeException("Error"));
        ResponseEntity<ResponseAppointmentDelete> res = target.actionDelete("test-id");
        assertEquals(null, res); // In this catch block it returns null
    }

    @Test
    void testGetAll_Success() {
        ResponseEntity<ResponseAppointmentGetAll> res = target.actionGetAll();
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetAll_Exception() {
        when(businessAppointment.getall()).thenThrow(new RuntimeException("Error"));
        ResponseEntity<ResponseAppointmentGetAll> res = target.actionGetAll();
        assertEquals(null, res);
    }

    @Test
    void testGetOne_Success() {
        ResponseEntity<ResponseAppointmentGetOne> res = target.actionGetOne("test-id");
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetOne_Exception() {
        when(businessAppointment.getone(anyString())).thenThrow(new RuntimeException("Error"));
        ResponseEntity<ResponseAppointmentGetOne> res = target.actionGetOne("test-id");
        assertEquals(null, res);
    }

    @Test
    void testGetByBarber_Success() {
        ResponseEntity<ResponseAppointmentGetAll> res = target.actionGetByBarber("user-id");
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetByBarber_Exception() {
        when(businessAppointment.getbybarber(anyString())).thenThrow(new RuntimeException("Error"));
        ResponseEntity<ResponseAppointmentGetAll> res = target.actionGetByBarber("user-id");
        assertEquals(null, res);
    }
}
