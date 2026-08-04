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
import org.springframework.mock.web.MockMultipartFile;

import com.epiis.apibarbershop.business.BusinessUser;
import com.epiis.apibarbershop.dto.request.RequestUserInsert;
import com.epiis.apibarbershop.dto.request.RequestUserUpdate;
import com.epiis.apibarbershop.dto.response.*;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class UserControllerTest {

    @InjectMocks
    private UserController target;

    @Mock
    private BusinessUser businessUser;

    @Test
    void testInsert_Success() {
        ResponseUserInsert resMock = new ResponseUserInsert();
        when(businessUser.insert(any())).thenReturn(resMock);
        ResponseEntity<ResponseUserInsert> res = target.actionInsert(new RequestUserInsert());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testInsert_Exception() {
        when(businessUser.insert(any())).thenThrow(new RuntimeException());
        assertNull(target.actionInsert(new RequestUserInsert()));
    }

    @Test
    void testUpdate_Success() {
        ResponseUserUpdate resMock = new ResponseUserUpdate();
        when(businessUser.update(any())).thenReturn(resMock);
        ResponseEntity<ResponseUserUpdate> res = target.actionUpdate(new RequestUserUpdate());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testUpdate_Exception() {
        when(businessUser.update(any())).thenThrow(new RuntimeException());
        assertNull(target.actionUpdate(new RequestUserUpdate()));
    }

    @Test
    void testDelete_Success() {
        ResponseUserDelete resMock = new ResponseUserDelete();
        when(businessUser.delete(anyString())).thenReturn(resMock);
        ResponseEntity<ResponseUserDelete> res = target.actionDelete("1");
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testDelete_Exception() {
        when(businessUser.delete(anyString())).thenThrow(new RuntimeException());
        assertNull(target.actionDelete("1"));
    }

    @Test
    void testGetAll_Success() {
        ResponseUserGetAll resMock = new ResponseUserGetAll();
        when(businessUser.getall()).thenReturn(resMock);
        ResponseEntity<ResponseUserGetAll> res = target.actionGetAll();
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetAll_Exception() {
        when(businessUser.getall()).thenThrow(new RuntimeException());
        assertNull(target.actionGetAll());
    }

    @Test
    void testGetOne_Success() {
        ResponseUserGetOne resMock = new ResponseUserGetOne();
        when(businessUser.getone(anyString())).thenReturn(resMock);
        ResponseEntity<ResponseUserGetOne> res = target.actionGetOne("1");
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetOne_Exception() {
        when(businessUser.getone(anyString())).thenThrow(new RuntimeException());
        assertNull(target.actionGetOne("1"));
    }

    @Test
    void testUploadPhoto_Success() {
        ResponseUserPhotoUpload resMock = new ResponseUserPhotoUpload();
        MockMultipartFile file = new MockMultipartFile("file", "image.png", "image/png", "test content".getBytes());
        when(businessUser.uploadPhoto(anyString(), any())).thenReturn(resMock);
        ResponseEntity<ResponseUserPhotoUpload> res = target.actionUploadPhoto("1", file);
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testUploadPhoto_Exception() {
        when(businessUser.uploadPhoto(anyString(), any())).thenThrow(new RuntimeException());
        MockMultipartFile file = new MockMultipartFile("file", "image.png", "image/png", "test content".getBytes());
        assertNull(target.actionUploadPhoto("1", file));
    }
}
