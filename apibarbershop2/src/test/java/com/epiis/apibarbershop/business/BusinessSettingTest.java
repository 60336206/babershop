package com.epiis.apibarbershop.business;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
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

import com.epiis.apibarbershop.dto.request.RequestSettingUpdate;
import com.epiis.apibarbershop.dto.response.ResponseSettingGetOne;
import com.epiis.apibarbershop.dto.response.ResponseSettingUpdate;
import com.epiis.apibarbershop.entity.EntitySetting;
import com.epiis.apibarbershop.repository.RepositorySetting;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class BusinessSettingTest {

    @InjectMocks
    private BusinessSetting target;

    @Mock
    private RepositorySetting repositorySetting;

    @BeforeEach
    void setUp() {
        EntitySetting setting = new EntitySetting();
        setting.setIdSetting("setting-id");
        setting.setOpenHour(Time.valueOf("08:00:00"));
        setting.setCloseHour(Time.valueOf("18:00:00"));
        lenient().when(repositorySetting.findAll()).thenReturn(List.of(setting));
        lenient().when(repositorySetting.save(any())).thenReturn(setting);
    }

    @Test
    void testGetOne_Success() {
        ResponseSettingGetOne res = target.getone();
        assertEquals("success", res.getType());
    }

    @Test
    void testGetOne_Empty() {
        when(repositorySetting.findAll()).thenReturn(List.of());
        ResponseSettingGetOne res = target.getone();
        assertEquals("error", res.getType()); 
    }

    @Test
    void testUpdate_Success() {
        RequestSettingUpdate req = new RequestSettingUpdate();
        req.setOpenHour("09:00");
        req.setCloseHour("17:00");

        ResponseSettingUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_Empty() {
        when(repositorySetting.findById(any())).thenReturn(Optional.empty());
        RequestSettingUpdate req = new RequestSettingUpdate();
        req.setOpenHour("09:00");
        req.setCloseHour("17:00");

        ResponseSettingUpdate res = target.update(req);
        assertEquals("success", res.getType()); // Creates new setting
    }
}
