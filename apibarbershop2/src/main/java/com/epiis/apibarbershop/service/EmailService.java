package com.epiis.apibarbershop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendConfirmationMessage(String toEmail, String customerName, String date, String time) {
        try {
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
            System.out.println("Correo de confirmación enviado a: " + toEmail);
        } catch (Exception e) {
            System.err.println("Error al enviar el correo de confirmación: " + e.getMessage());
        }
    }
}
