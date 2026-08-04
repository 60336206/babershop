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

import com.epiis.apibarbershop.business.BusinessGallery;
import com.epiis.apibarbershop.dto.request.RequestGalleryInsert;
import com.epiis.apibarbershop.dto.request.RequestGalleryUpdate;
import com.epiis.apibarbershop.dto.response.*;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class GalleryControllerTest {

    @InjectMocks
    private GalleryController target;

    @Mock
    private BusinessGallery businessGallery;

    @Test
    void testInsert_Success() {
        ResponseGalleryInsert resMock = new ResponseGalleryInsert();
        when(businessGallery.insert(any())).thenReturn(resMock);
        ResponseEntity<ResponseGalleryInsert> res = target.actionInsert(new RequestGalleryInsert());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testInsert_Exception() {
        when(businessGallery.insert(any())).thenThrow(new RuntimeException());
        assertNull(target.actionInsert(new RequestGalleryInsert()));
    }

    @Test
    void testUpdate_Success() {
        ResponseGalleryUpdate resMock = new ResponseGalleryUpdate();
        when(businessGallery.update(any())).thenReturn(resMock);
        ResponseEntity<ResponseGalleryUpdate> res = target.actionUpdate(new RequestGalleryUpdate());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testUpdate_Exception() {
        when(businessGallery.update(any())).thenThrow(new RuntimeException());
        assertNull(target.actionUpdate(new RequestGalleryUpdate()));
    }

    @Test
    void testDelete_Success() {
        ResponseGalleryDelete resMock = new ResponseGalleryDelete();
        when(businessGallery.delete(anyString())).thenReturn(resMock);
        ResponseEntity<ResponseGalleryDelete> res = target.actionDelete("1");
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testDelete_Exception() {
        when(businessGallery.delete(anyString())).thenThrow(new RuntimeException());
        assertNull(target.actionDelete("1"));
    }

    @Test
    void testGetAll_Success() {
        ResponseGalleryGetAll resMock = new ResponseGalleryGetAll();
        when(businessGallery.getall()).thenReturn(resMock);
        ResponseEntity<ResponseGalleryGetAll> res = target.actionGetAll();
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetAll_Exception() {
        when(businessGallery.getall()).thenThrow(new RuntimeException());
        assertNull(target.actionGetAll());
    }
}
