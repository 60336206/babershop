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

import com.epiis.apibarbershop.business.BusinessCustomer;
import com.epiis.apibarbershop.dto.request.RequestCustomerInsert;
import com.epiis.apibarbershop.dto.request.RequestCustomerUpdate;
import com.epiis.apibarbershop.dto.response.*;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class CustomerControllerTest {

    @InjectMocks
    private CustomerController target;

    @Mock
    private BusinessCustomer businessCustomer;

    @Test
    void testInsert_Success() {
        ResponseCustomerInsert resMock = new ResponseCustomerInsert();
        when(businessCustomer.insert(any())).thenReturn(resMock);
        ResponseEntity<ResponseCustomerInsert> res = target.actionInsert(new RequestCustomerInsert());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testInsert_Exception() {
        when(businessCustomer.insert(any())).thenThrow(new RuntimeException());
        assertNull(target.actionInsert(new RequestCustomerInsert()));
    }

    @Test
    void testUpdate_Success() {
        ResponseCustomerUpdate resMock = new ResponseCustomerUpdate();
        when(businessCustomer.update(any())).thenReturn(resMock);
        ResponseEntity<ResponseCustomerUpdate> res = target.actionUpdate(new RequestCustomerUpdate());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testUpdate_Exception() {
        when(businessCustomer.update(any())).thenThrow(new RuntimeException());
        assertNull(target.actionUpdate(new RequestCustomerUpdate()));
    }

    @Test
    void testGetAll_Success() {
        ResponseCustomerGetAll resMock = new ResponseCustomerGetAll();
        when(businessCustomer.getall()).thenReturn(resMock);
        ResponseEntity<ResponseCustomerGetAll> res = target.actionGetAll();
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetAll_Exception() {
        when(businessCustomer.getall()).thenThrow(new RuntimeException());
        assertNull(target.actionGetAll());
    }

    @Test
    void testGetOne_Success() {
        ResponseCustomerGetOne resMock = new ResponseCustomerGetOne();
        when(businessCustomer.getone(anyString())).thenReturn(resMock);
        ResponseEntity<ResponseCustomerGetOne> res = target.actionGetOne("1");
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetOne_Exception() {
        when(businessCustomer.getone(anyString())).thenThrow(new RuntimeException());
        assertNull(target.actionGetOne("1"));
    }
}
