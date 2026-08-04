package com.epiis.apibarbershop.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import com.epiis.apibarbershop.business.BusinessSetting;
import com.epiis.apibarbershop.dto.request.RequestSettingUpdate;
import com.epiis.apibarbershop.dto.response.ResponseSettingGetOne;
import com.epiis.apibarbershop.dto.response.ResponseSettingUpdate;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class SettingControllerTest {

    @InjectMocks
    private SettingController target;

    @Mock
    private BusinessSetting businessSetting;

    @Test
    void testUpdate_Success() {
        ResponseSettingUpdate resMock = new ResponseSettingUpdate();
        when(businessSetting.update(any())).thenReturn(resMock);
        ResponseEntity<ResponseSettingUpdate> res = target.actionUpdate(new RequestSettingUpdate());
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testUpdate_Exception() {
        when(businessSetting.update(any())).thenThrow(new RuntimeException());
        assertNull(target.actionUpdate(new RequestSettingUpdate()));
    }

    @Test
    void testGetOne_Success() {
        ResponseSettingGetOne resMock = new ResponseSettingGetOne();
        when(businessSetting.getone()).thenReturn(resMock);
        ResponseEntity<ResponseSettingGetOne> res = target.actionGetOne();
        assertEquals(200, res.getStatusCode().value());
    }

    @Test
    void testGetOne_Exception() {
        when(businessSetting.getone()).thenThrow(new RuntimeException());
        assertNull(target.actionGetOne());
    }
}
