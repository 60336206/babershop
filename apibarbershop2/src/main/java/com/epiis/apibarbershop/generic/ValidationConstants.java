package com.epiis.apibarbershop.generic;

public class ValidationConstants {
    private ValidationConstants() {
        throw new IllegalStateException("Utility class");
    }
    
    public static final String MSG_NAME_INVALID = "El nombre es obligatorio.";
    public static final String MSG_SURNAME_INVALID = "El apellido es obligatorio.";
    public static final String MSG_PHONE_REQUIRED = "El número de teléfono es obligatorio.";
    public static final String MSG_PHONE_FORMAT = "El número de teléfono no tiene un formato válido.";
    public static final String MSG_PHONE_EXISTS = "El número de teléfono ya está registrado.";
    public static final String MSG_EMAIL_FORMAT = "El email no tiene un formato válido.";
    public static final String MSG_EMAIL_EXISTS = "El email ya está registrado.";
    
    public static final String MSG_CUSTOMER_NOT_FOUND = "No se encontró el cliente.";
    public static final String MSG_USER_NOT_FOUND = "No se encontró el usuario.";
    public static final String MSG_SERVICE_NOT_FOUND = "No se encontró el servicio.";
    public static final String MSG_APPOINTMENT_NOT_FOUND = "No se encontró la reserva.";
    
    public static final String ROLE_ADMIN = "ROLE_ADMIN";
    public static final String ROLE_BARBER = "ROLE_BARBER";
    public static final String ROLE_CUSTOMER = "ROLE_CUSTOMER";
    
    public static final String WHATSAPP_PREFIX = "whatsapp:+";
}
