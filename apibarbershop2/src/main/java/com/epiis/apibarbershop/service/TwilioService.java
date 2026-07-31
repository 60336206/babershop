package com.epiis.apibarbershop.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

@Service
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
                System.out.println("[TWILIO] Iniciando envío de SMS a: " + toPhone);

                // Quitar espacios vacíos que el usuario pueda haber introducido
                String cleanPhone = toPhone.replaceAll("\\s+", "");

                // Asegurar formato internacional para el teléfono (asume Perú +51)
                String formattedPhone = cleanPhone.startsWith("+") ? cleanPhone : "+51" + cleanPhone;

                // Agregar prefijo "whatsapp:" para usar el Sandbox de Twilio WhatsApp
                String whatsappTo = "whatsapp:" + formattedPhone;
                String whatsappFrom = fromNumber.startsWith("whatsapp:") ? fromNumber : "whatsapp:" + fromNumber;

                String text = String.format("Hola %s, tu reserva en BarberShop para el %s a las %s ha sido CONFIRMADA. ¡Te esperamos!", 
                        customerName, date, time);

                Message message = Message.creator(
                        new PhoneNumber(whatsappTo),
                        new PhoneNumber(whatsappFrom),
                        text
                ).create();

                System.out.println("[TWILIO] ✅ WhatsApp enviado exitosamente con SID: " + message.getSid());
            } catch (Exception e) {
                System.err.println("[TWILIO] ❌ Error al enviar WhatsApp a " + toPhone + ": " + e.getMessage());
                e.printStackTrace();
            }
        }).start();
    }
}
