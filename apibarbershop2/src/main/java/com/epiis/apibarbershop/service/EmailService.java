package com.epiis.apibarbershop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    /**
     * Envía el correo en un hilo separado para no bloquear la respuesta HTTP.
     */
    public void sendConfirmationMessage(String toEmail, String customerName, String date, String time) {
        // Lanzar en hilo separado para que la confirmación sea instantánea
        new Thread(() -> {
            try {
                System.out.println("[EMAIL] Iniciando envío a: " + toEmail);

                SimpleMailMessage message = new SimpleMailMessage();
                message.setFrom("abarriosllasaycca@gmail.com");
                message.setTo(toEmail);
                message.setSubject("Confirmación de Reserva - BarberShop");

                String text = String.format("Hola %s,\n\n"
                        + "¡Excelente noticia! Tu reserva en BarberShop para el %s a las %s ha sido CONFIRMADA.\n\n"
                        + "¡Te esperamos!\n\n"
                        + "Atentamente,\n"
                        + "El equipo de BarberShop.", customerName, date, time);

                message.setText(text);

                mailSender.send(message);
                System.out.println("[EMAIL] ✅ Correo enviado exitosamente a: " + toEmail);
            } catch (Exception e) {
                System.err.println("[EMAIL] ❌ Error al enviar correo a " + toEmail + ": " + e.getMessage());
                e.printStackTrace();
            }
        }).start();
    }
}
