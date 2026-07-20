package com.epiis.apibarbershop.dto.request;
import java.math.BigDecimal;
import lombok.Getter; import lombok.Setter;
@Getter @Setter
public class RequestServiceInsert {
	private String name;
	private String description;
	private BigDecimal price;
	private Integer durationMinutes;
	private String image;
}
