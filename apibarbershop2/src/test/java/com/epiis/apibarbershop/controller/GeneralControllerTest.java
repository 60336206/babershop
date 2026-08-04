package com.epiis.apibarbershop.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

@ExtendWith(MockitoExtension.class)
@SuppressWarnings("all")
class GeneralControllerTest {

    @InjectMocks
    private GeneralController target;

    @Test
    void testIndex() {
        ResponseEntity<Map<String, String>> res = target.actionIndex();
        assertEquals(200, res.getStatusCode().value());
        assertEquals("Barbershop API funcionando!", res.getBody().get("welcome"));
    }
}
