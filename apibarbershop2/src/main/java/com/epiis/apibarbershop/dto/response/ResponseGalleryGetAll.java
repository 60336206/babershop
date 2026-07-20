package com.epiis.apibarbershop.dto.response;
import java.util.List;
import com.epiis.apibarbershop.entity.EntityGallery;
import com.epiis.apibarbershop.generic.ResponseGeneric;
public class ResponseGalleryGetAll extends ResponseGeneric {
	public List<EntityGallery> listGallery;
}
