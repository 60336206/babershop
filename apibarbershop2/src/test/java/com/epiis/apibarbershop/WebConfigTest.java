package com.epiis.apibarbershop;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

class WebConfigTest {

    private WebConfig webConfig;

    @BeforeEach
    void setUp() {
        webConfig = new WebConfig();
        ReflectionTestUtils.setField(webConfig, "appointmentUploadPath", "uploads/appointments/");
        ReflectionTestUtils.setField(webConfig, "userUploadPath", "uploads/users/");
    }

    @Test
    void testAddCorsMappings() {
        CorsRegistry registry = mock(CorsRegistry.class);
        CorsRegistration registration = mock(CorsRegistration.class);

        when(registry.addMapping(anyString())).thenReturn(registration);
        when(registration.allowedOriginPatterns(anyString(), anyString())).thenReturn(registration);
        when(registration.allowedMethods(anyString(), anyString(), anyString(), anyString(), anyString(), anyString())).thenReturn(registration);
        when(registration.allowedHeaders(anyString())).thenReturn(registration);
        when(registration.exposedHeaders(anyString())).thenReturn(registration);
        when(registration.allowCredentials(anyBoolean())).thenReturn(registration);

        webConfig.addCorsMappings(registry);

        verify(registry).addMapping("/**");
        verify(registration).allowedOriginPatterns("http://localhost:4200", "http://127.0.0.1:4200");
    }

    @Test
    void testAddResourceHandlers() {
        ResourceHandlerRegistry registry = mock(ResourceHandlerRegistry.class);
        ResourceHandlerRegistration registration = mock(ResourceHandlerRegistration.class);

        when(registry.addResourceHandler(anyString())).thenReturn(registration);
        when(registration.addResourceLocations(anyString())).thenReturn(registration);

        webConfig.addResourceHandlers(registry);

        verify(registry).addResourceHandler("/uploads/appointments/**");
        verify(registry).addResourceHandler("/uploads/users/**");
    }

    @Test
    void testAddResourceHandlers_WithoutSlash() {
        ReflectionTestUtils.setField(webConfig, "appointmentUploadPath", "uploads/appointments");
        ReflectionTestUtils.setField(webConfig, "userUploadPath", "uploads/users");

        ResourceHandlerRegistry registry = mock(ResourceHandlerRegistry.class);
        ResourceHandlerRegistration registration = mock(ResourceHandlerRegistration.class);

        when(registry.addResourceHandler(anyString())).thenReturn(registration);
        when(registration.addResourceLocations(anyString())).thenReturn(registration);

        webConfig.addResourceHandlers(registry);
        
        verify(registry).addResourceHandler("/uploads/appointments/**");
        verify(registry).addResourceHandler("/uploads/users/**");
    }
}
