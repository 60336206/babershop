package com.epiis.apibarbershop.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import org.springframework.scheduling.annotation.Async;

@Service
public class WhatsAppService {

    // Utilizaremos CallMeBot como ejemplo de API sencilla. 
    // Reemplaza "TU_API_KEY" con la clave que te den al registrarte.
    private final String API_KEY = "TU_API_KEY";
    private final String API_URL = "https://api.callmebot.com/whatsapp.php";

    private final RestTemplate restTemplate;

    public WhatsAppService() {
        this.restTemplate = new RestTemplate();
    }

    @Async
    public void sendConfirmationMessage(String phone, String customerName, String date, String time) {
        try {
            // Asegurarnos de que el teléfono tenga el formato correcto (solo números)
            // Si en tu BD no se guarda con código de país, deberás concatenarlo, ej: "+51" + phone
            String formattedPhone = phone.replaceAll("[^0-9+]", "");
            if (!formattedPhone.startsWith("+")) {
                formattedPhone = "+51" + formattedPhone; // Asumiendo Perú como defecto, cambiar según necesidad
            }

            String message = String.format("Hola %s, ¡Excelente noticia! Tu reserva en BarberShop para el %s a las %s ha sido CONFIRMADA. ¡Te esperamos!", 
                                           customerName, date, time);
            
            String encodedMessage = URLEncoder.encode(message, StandardCharsets.UTF_8.toString());

            String url = String.format("%s?phone=%s&text=%s&apikey=%s", API_URL, formattedPhone, encodedMessage, API_KEY);

            System.out.println("Enviando WhatsApp a: " + formattedPhone);
            System.out.println("Mensaje: " + message);

            // Descomenta la siguiente línea cuando tengas una API KEY real para enviar el mensaje:
            // ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            // System.out.println("Respuesta WhatsApp API: " + response.getBody());

        } catch (Exception e) {
            System.err.println("Error al enviar WhatsApp: " + e.getMessage());
        }
    }
}
