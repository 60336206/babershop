package com.epiis.apibarbershop.dto.request;
import java.math.BigDecimal;
import lombok.Getter; import lombok.Setter;
@Getter @Setter
public class RequestServiceUpdate {
	private String idService;
	private String name;
	private String description;
	private BigDecimal price;
	private Integer durationMinutes;
	private String image;
	private Integer status;
}
