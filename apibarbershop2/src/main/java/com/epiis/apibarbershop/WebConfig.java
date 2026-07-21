package com.epiis.apibarbershop;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${upload.path:uploads/appointments/}")
    private String appointmentUploadPath;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOriginPatterns("*")
            .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
            .allowedHeaders("*")
            .exposedHeaders("Authorization")
            .allowCredentials(true);
    }

    @Value("${upload.users.path:uploads/users/}")
    private String userUploadPath;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Sirve las imágenes de referencia subidas por el cliente al reservar
        String appointmentLocation = appointmentUploadPath.endsWith("/") ? appointmentUploadPath : appointmentUploadPath + "/";
        registry.addResourceHandler("/uploads/appointments/**")
            .addResourceLocations("file:" + appointmentLocation);

        // Sirve las fotos de los usuarios/barberos
        String userLocation = userUploadPath.endsWith("/") ? userUploadPath : userUploadPath + "/";
        registry.addResourceHandler("/uploads/users/**")
            .addResourceLocations("file:" + userLocation);
    }
}