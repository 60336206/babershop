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

import com.epiis.apibarbershop.business.BusinessService;
import com.epiis.apibarbershop.dto.request.RequestServiceInsert;
import com.epiis.apibarbershop.dto.request.RequestServiceUpdate;
import com.epiis.apibarbershop.dto.response.*;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class ServiceControllerTest {

    @InjectMocks
    private ServiceController target;

    @Mock
    private BusinessService businessService;

    @Test
    void testInsert_Success() {
        ResponseServiceInsert resMock = new ResponseServiceInsert();
        when(businessService.insert(any())).thenReturn(resMock);
        ResponseEntity<ResponseServiceInsert> res = target.actionInsert(new RequestServiceInsert());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testInsert_Exception() {
        when(businessService.insert(any())).thenThrow(new RuntimeException());
        assertNull(target.actionInsert(new RequestServiceInsert()));
    }

    @Test
    void testUpdate_Success() {
        ResponseServiceUpdate resMock = new ResponseServiceUpdate();
        when(businessService.update(any())).thenReturn(resMock);
        ResponseEntity<ResponseServiceUpdate> res = target.actionUpdate(new RequestServiceUpdate());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testUpdate_Exception() {
        when(businessService.update(any())).thenThrow(new RuntimeException());
        assertNull(target.actionUpdate(new RequestServiceUpdate()));
    }

    @Test
    void testDelete_Success() {
        ResponseServiceDelete resMock = new ResponseServiceDelete();
        when(businessService.delete(anyString())).thenReturn(resMock);
        ResponseEntity<ResponseServiceDelete> res = target.actionDelete("1");
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testDelete_Exception() {
        when(businessService.delete(anyString())).thenThrow(new RuntimeException());
        assertNull(target.actionDelete("1"));
    }

    @Test
    void testGetAll_Success() {
        ResponseServiceGetAll resMock = new ResponseServiceGetAll();
        when(businessService.getall()).thenReturn(resMock);
        ResponseEntity<ResponseServiceGetAll> res = target.actionGetAll();
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetAll_Exception() {
        when(businessService.getall()).thenThrow(new RuntimeException());
        assertNull(target.actionGetAll());
    }
}
