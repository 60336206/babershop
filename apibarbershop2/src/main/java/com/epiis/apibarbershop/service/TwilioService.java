package com.epiis.apibarbershop.service;

import lombok.extern.slf4j.Slf4j;
import com.epiis.apibarbershop.generic.ValidationConstants;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
@Slf4j
@SuppressWarnings("all")
public class TwilioService {

    @Value("${twilio.account-sid-p1}")
    private String accountSidP1;

    @Value("${twilio.account-sid-p2}")
    private String accountSidP2;

    @Value("${twilio.auth-token}")
    private String authToken;

    @Value("${twilio.phone-number}")
    private String fromNumber;

    @PostConstruct
    public void init() {
        Twilio.init(accountSidP1 + accountSidP2, authToken);
    }

    public void sendConfirmationSms(String toPhone, String customerName, String date, String time) {
        new Thread(() -> {
            try {
                log.info("[TWILIO] Iniciando envío de SMS a: " + toPhone);

                // Quitar espacios vacíos que el usuario pueda haber introducido
                String cleanPhone = toPhone.replaceAll("\\s+", "");

                // Asegurar formato internacional para el teléfono (asume Perú +51)
                String formattedPhone = cleanPhone.startsWith("+") ? cleanPhone : "+51" + cleanPhone;

                // Agregar prefijo ValidationConstants.WHATSAPP_PREFIX para usar el Sandbox de Twilio WhatsApp
                String whatsappTo = ValidationConstants.WHATSAPP_PREFIX + formattedPhone;
                String whatsappFrom = fromNumber.startsWith(ValidationConstants.WHATSAPP_PREFIX) ? fromNumber : ValidationConstants.WHATSAPP_PREFIX + fromNumber;

                String text = String.format("Hola %s, tu reserva en BarberShop para el %s a las %s ha sido CONFIRMADA. ¡Te esperamos!", 
                        customerName, date, time);

                Message message = Message.creator(
                        new PhoneNumber(whatsappTo),
                        new PhoneNumber(whatsappFrom),
                        text
                ).create();

                log.info("[TWILIO] ✅ WhatsApp enviado exitosamente con SID: " + message.getSid());
            } catch (Exception e) {
                log.error("[TWILIO] ❌ Error al enviar WhatsApp a " + toPhone + ": " + e.getMessage());
                e.printStackTrace();
            }
        }).start();
    }
}
