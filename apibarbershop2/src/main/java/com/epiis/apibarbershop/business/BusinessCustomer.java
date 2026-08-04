package com.epiis.apibarbershop.business;

import com.epiis.apibarbershop.generic.ValidationConstants;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.epiis.apibarbershop.dto.request.RequestCustomerInsert;
import com.epiis.apibarbershop.dto.request.RequestCustomerUpdate;
import com.epiis.apibarbershop.dto.response.*;
import com.epiis.apibarbershop.generic.ResponseGeneric;
import com.epiis.apibarbershop.entity.EntityCustomer;
import com.epiis.apibarbershop.repository.RepositoryCustomer;
import com.epiis.apibarbershop.repository.RepositoryUser;
import com.epiis.apibarbershop.staticdata.EnumStatus;

@Service
@SuppressWarnings("all")
public class BusinessCustomer {
    private final RepositoryCustomer repositoryCustomer;
    private final RepositoryUser repositoryUser;

    public BusinessCustomer(RepositoryCustomer repositoryCustomer, RepositoryUser repositoryUser) {
        this.repositoryCustomer = repositoryCustomer;
        this.repositoryUser = repositoryUser;
    }

    // ── Validaciones privadas reutilizables ──────────────────────────────────

    private String validateName(String firstName, String surName, ResponseGeneric response) {
        if (firstName == null || firstName.trim().length() < 3) {
            response.listMessage.add(ValidationConstants.MSG_NAME_INVALID);
            return ValidationConstants.MSG_NAME_INVALID;
        }
        if (surName == null || surName.trim().length() < 3) {
            response.listMessage.add(ValidationConstants.MSG_SURNAME_INVALID);
            return ValidationConstants.MSG_SURNAME_INVALID;
        }
        return null;
    }

    private String validatePhone(String phone, ResponseGeneric response) {
        if (phone == null || phone.trim().isEmpty()) {
            response.listMessage.add(ValidationConstants.MSG_PHONE_REQUIRED);
            return ValidationConstants.MSG_PHONE_REQUIRED;
        }
        if (!phone.matches("\\d{9}")) {
            response.listMessage.add(ValidationConstants.MSG_PHONE_FORMAT);
            return ValidationConstants.MSG_PHONE_FORMAT;
        }
        return null;
    }

    // ── Operaciones CRUD ─────────────────────────────────────────────────────

    public ResponseCustomerInsert insert(RequestCustomerInsert request) {
        ResponseCustomerInsert response = new ResponseCustomerInsert();

        // 1. Validar Nombres y Apellidos
        if (validateName(request.getFirstName(), request.getSurName(), response) != null) return response;

        // 2. Validar Teléfono
        if (validatePhone(request.getPhone(), response) != null) return response;
        if (repositoryCustomer.findByPhone(request.getPhone()).isPresent() || repositoryUser.findByPhone(request.getPhone()).isPresent()) {
            response.listMessage.add(ValidationConstants.MSG_PHONE_EXISTS);
            return response;
        }

        // 3. Validar Email (Opcional, con formato y único si se ingresa)
        String rawEmail = request.getEmail() != null ? request.getEmail().trim() : "";
        if (!rawEmail.isEmpty()) {
            if (!rawEmail.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$")) {
                response.listMessage.add(ValidationConstants.MSG_EMAIL_FORMAT);
                return response;
            }
            if (repositoryCustomer.findByEmail(rawEmail).isPresent() || repositoryUser.findByEmail(rawEmail).isPresent()) {
                response.listMessage.add(ValidationConstants.MSG_EMAIL_EXISTS);
                return response;
            }
        }
        String email = rawEmail.isEmpty() ? null : rawEmail;

        EntityCustomer entity = new EntityCustomer();
        entity.setIdCustomer(UUID.randomUUID().toString());
        entity.setFirstName(request.getFirstName().trim());
        entity.setSurName(request.getSurName().trim());
        entity.setPhone(request.getPhone().trim());
        entity.setEmail(email);
        entity.setPassword(null); // El cliente NO inicia sesión
        entity.setStatus(EnumStatus.ACTIVE.getValue());
        entity.setCreatedAt(new Date());
        entity.setUpdatedAt(entity.getCreatedAt());

        repositoryCustomer.save(entity);

        response.idCustomer = entity.getIdCustomer();
        response.success();
        response.listMessage.add("Cliente registrado correctamente.");
        return response;
    }

    public ResponseCustomerUpdate update(RequestCustomerUpdate request) {
        ResponseCustomerUpdate response = new ResponseCustomerUpdate();

        Optional<EntityCustomer> optional = repositoryCustomer.findById(request.getIdCustomer());
        if (optional.isEmpty()) {
            response.listMessage.add(ValidationConstants.MSG_CUSTOMER_NOT_FOUND);
            return response;
        }

        EntityCustomer entity = optional.get();

        // 1. Validar Nombres y Apellidos
        if (validateName(request.getFirstName(), request.getSurName(), response) != null) return response;

        // 2. Validar Teléfono
        if (validatePhone(request.getPhone(), response) != null) return response;
        Optional<EntityCustomer> optPhone = repositoryCustomer.findByPhone(request.getPhone());
        if (optPhone.isPresent() && !optPhone.get().getIdCustomer().equals(entity.getIdCustomer())) {
            response.listMessage.add(ValidationConstants.MSG_PHONE_EXISTS);
            return response;
        }
        if (repositoryUser.findByPhone(request.getPhone()).isPresent()) {
            response.listMessage.add(ValidationConstants.MSG_PHONE_EXISTS);
            return response;
        }

        // 3. Validar Email (Opcional, con formato y único si se ingresa)
        String rawEmail = request.getEmail() != null ? request.getEmail().trim() : "";
        if (!rawEmail.isEmpty()) {
            if (!rawEmail.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$")) {
                response.listMessage.add(ValidationConstants.MSG_EMAIL_FORMAT);
                return response;
            }
            Optional<EntityCustomer> optEmail = repositoryCustomer.findByEmail(rawEmail);
            if (optEmail.isPresent() && !optEmail.get().getIdCustomer().equals(entity.getIdCustomer())) {
                response.listMessage.add(ValidationConstants.MSG_EMAIL_EXISTS);
                return response;
            }
            if (repositoryUser.findByEmail(rawEmail).isPresent()) {
                response.listMessage.add(ValidationConstants.MSG_EMAIL_EXISTS);
                return response;
            }
        }
        String email = rawEmail.isEmpty() ? null : rawEmail;

        entity.setFirstName(request.getFirstName().trim());
        entity.setSurName(request.getSurName().trim());
        entity.setPhone(request.getPhone().trim());
        entity.setEmail(email);

        if (request.getStatus() != null) {
            entity.setStatus(request.getStatus());
        }
        entity.setUpdatedAt(new Date());

        repositoryCustomer.save(entity);

        response.success();
        response.listMessage.add("Cliente actualizado correctamente.");
        return response;
    }

    public ResponseCustomerDelete delete(String idCustomer) {
        ResponseCustomerDelete response = new ResponseCustomerDelete();

        Optional<EntityCustomer> optional = repositoryCustomer.findById(idCustomer);
        if (optional.isEmpty()) {
            response.listMessage.add(ValidationConstants.MSG_CUSTOMER_NOT_FOUND);
            return response;
        }

        EntityCustomer entity = optional.get();
        repositoryCustomer.delete(entity);

        response.success();
        response.listMessage.add("Cliente eliminado correctamente.");
        return response;
    }

    public ResponseCustomerGetAll getall() {
        ResponseCustomerGetAll response = new ResponseCustomerGetAll();
        response.listCustomer = repositoryCustomer.findAll();
        response.success();
        response.listMessage.add("Listado obtenido correctamente.");
        return response;
    }

    public ResponseCustomerGetOne getone(String idCustomer) {
        ResponseCustomerGetOne response = new ResponseCustomerGetOne();

        Optional<EntityCustomer> optional = repositoryCustomer.findById(idCustomer);
        if (optional.isEmpty()) {
            response.listMessage.add(ValidationConstants.MSG_CUSTOMER_NOT_FOUND);
            return response;
        }

        response.customer = optional.get();
        response.success();
        response.listMessage.add("Cliente obtenido correctamente.");
        return response;
    }
}