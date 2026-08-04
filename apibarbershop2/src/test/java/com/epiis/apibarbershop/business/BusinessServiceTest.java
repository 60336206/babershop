package com.epiis.apibarbershop.business;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;

import com.epiis.apibarbershop.dto.request.RequestServiceInsert;
import com.epiis.apibarbershop.dto.request.RequestServiceUpdate;
import com.epiis.apibarbershop.dto.response.ResponseServiceDelete;
import com.epiis.apibarbershop.dto.response.ResponseServiceGetAll;
import com.epiis.apibarbershop.dto.response.ResponseServiceGetOne;
import com.epiis.apibarbershop.dto.response.ResponseServiceInsert;
import com.epiis.apibarbershop.dto.response.ResponseServiceUpdate;
import com.epiis.apibarbershop.entity.EntityService;
import com.epiis.apibarbershop.repository.RepositoryService;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class BusinessServiceTest {

    @InjectMocks
    private BusinessService target;

    @Mock
    private RepositoryService repositoryService;

    @BeforeEach
    void setUp() {
        EntityService service = new EntityService();
        service.setIdService("service-id");
        service.setName("Corte");
        
        lenient().when(repositoryService.findById(anyString())).thenReturn(Optional.of(service));
        lenient().when(repositoryService.findAll()).thenReturn(List.of(service));
        lenient().when(repositoryService.save(any())).thenReturn(service);
    }

    @Test
    void testInsert_Success() {
        RequestServiceInsert req = new RequestServiceInsert();
        req.setName("Corte");
        req.setPrice(new java.math.BigDecimal("10.0"));
        req.setDurationMinutes(30);

        ResponseServiceInsert res = target.insert(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testInsert_Validation_MissingName() {
        RequestServiceInsert req = new RequestServiceInsert();
        req.setPrice(new java.math.BigDecimal("10.0"));
        req.setDurationMinutes(30);

        ResponseServiceInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_Success() {
        RequestServiceUpdate req = new RequestServiceUpdate();
        req.setIdService("service-id");
        req.setName("Corte 2");
        req.setPrice(new java.math.BigDecimal("15.0"));
        req.setDurationMinutes(40);

        ResponseServiceUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testUpdate_Validation_NotFound() {
        when(repositoryService.findById(anyString())).thenReturn(Optional.empty());
        RequestServiceUpdate req = new RequestServiceUpdate();
        req.setIdService("service-id");
        
        ResponseServiceUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testDelete_Success() {
        ResponseServiceDelete res = target.delete("service-id");
        assertEquals("success", res.getType());
    }

    @Test
    void testDelete_NotFound() {
        when(repositoryService.findById(anyString())).thenReturn(Optional.empty());
        ResponseServiceDelete res = target.delete("service-id");
        assertEquals("error", res.getType());
    }

    @Test
    void testGetAll() {
        ResponseServiceGetAll res = target.getall();
        assertEquals("success", res.getType());
    }

    @Test
    void testGetOne() {
        ResponseServiceGetOne res = target.getone("service-id");
        assertEquals("success", res.getType());
    }

    @Test
    void testInsert_PriceInvalid() {
        RequestServiceInsert req = new RequestServiceInsert();
        req.setName("Corte");
        req.setPrice(new java.math.BigDecimal("0"));
        req.setDurationMinutes(30);

        ResponseServiceInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_PriceTooHigh() {
        RequestServiceInsert req = new RequestServiceInsert();
        req.setName("Corte");
        req.setPrice(new java.math.BigDecimal("1001"));
        req.setDurationMinutes(30);

        ResponseServiceInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_DurationInvalid() {
        RequestServiceInsert req = new RequestServiceInsert();
        req.setName("Corte");
        req.setPrice(new java.math.BigDecimal("10"));
        req.setDurationMinutes(0);

        ResponseServiceInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_DurationTooLong() {
        RequestServiceInsert req = new RequestServiceInsert();
        req.setName("Corte");
        req.setPrice(new java.math.BigDecimal("10"));
        req.setDurationMinutes(301);

        ResponseServiceInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testInsert_DuplicateName() {
        EntityService existing = new EntityService();
        existing.setIdService("other-id");
        existing.setName("Corte");
        when(repositoryService.findByName(anyString())).thenReturn(Optional.of(existing));

        RequestServiceInsert req = new RequestServiceInsert();
        req.setName("Corte");
        req.setPrice(new java.math.BigDecimal("10"));
        req.setDurationMinutes(30);

        ResponseServiceInsert res = target.insert(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_DuplicateName() {
        EntityService existing = new EntityService();
        existing.setIdService("other-id");
        existing.setName("Corte");
        when(repositoryService.findByName(anyString())).thenReturn(Optional.of(existing));

        RequestServiceUpdate req = new RequestServiceUpdate();
        req.setIdService("service-id");
        req.setName("Corte");
        req.setPrice(new java.math.BigDecimal("15"));
        req.setDurationMinutes(40);

        ResponseServiceUpdate res = target.update(req);
        assertEquals("error", res.getType());
    }

    @Test
    void testUpdate_Status() {
        RequestServiceUpdate req = new RequestServiceUpdate();
        req.setIdService("service-id");
        req.setName("Corte 2");
        req.setPrice(new java.math.BigDecimal("15"));
        req.setDurationMinutes(40);
        req.setStatus(1);

        ResponseServiceUpdate res = target.update(req);
        assertEquals("success", res.getType());
    }

    @Test
    void testGetOne_NotFound() {
        when(repositoryService.findById(anyString())).thenReturn(Optional.empty());
        ResponseServiceGetOne res = target.getone("service-id");
        assertEquals("error", res.getType());
    }
}
