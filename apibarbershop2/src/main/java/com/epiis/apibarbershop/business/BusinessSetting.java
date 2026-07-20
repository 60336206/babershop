package com.epiis.apibarbershop.business;

import java.sql.Time;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.epiis.apibarbershop.dto.request.RequestSettingUpdate;
import com.epiis.apibarbershop.dto.response.*;
import com.epiis.apibarbershop.entity.EntitySetting;
import com.epiis.apibarbershop.repository.RepositorySetting;

@Service
public class BusinessSetting {
	private final RepositorySetting repositorySetting;

	public BusinessSetting(RepositorySetting repositorySetting) {
		this.repositorySetting = repositorySetting;
	}

	public ResponseSettingUpdate update(RequestSettingUpdate request) {
		ResponseSettingUpdate response = new ResponseSettingUpdate();

		EntitySetting entity;
		Optional<EntitySetting> optional = repositorySetting.findById(request.getIdSetting() != null ? request.getIdSetting() : "");

		if (optional.isPresent()) {
			entity = optional.get();
		} else {
			entity = new EntitySetting();
			entity.setIdSetting(UUID.randomUUID().toString());
			entity.setCreatedAt(new Date());
		}

		entity.setBusinessName(request.getBusinessName());
		entity.setAddress(request.getAddress());
		entity.setPhone(request.getPhone());
		entity.setEmail(request.getEmail());
		entity.setLogo(request.getLogo());
		entity.setOpenHour(Time.valueOf(request.getOpenHour()));
		entity.setCloseHour(Time.valueOf(request.getCloseHour()));
		entity.setUpdatedAt(new Date());

		repositorySetting.save(entity);

		response.success();
		response.listMessage.add("Configuración guardada correctamente.");
		return response;
	}

	public ResponseSettingGetOne getone() {
		ResponseSettingGetOne response = new ResponseSettingGetOne();

		List<EntitySetting> list = repositorySetting.findAll();
		if (list.isEmpty()) {
			response.listMessage.add("Sin configuración registrada.");
			return response;
		}

		response.setting = list.get(0);
		response.success();
		response.listMessage.add("Configuración obtenida correctamente.");
		return response;
	}
}
