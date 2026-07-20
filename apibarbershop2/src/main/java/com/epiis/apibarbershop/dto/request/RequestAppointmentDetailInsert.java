package com.epiis.apibarbershop.dto.request;
import java.math.BigDecimal;
import lombok.Getter; import lombok.Setter;
@Getter @Setter
public class RequestAppointmentDetailInsert {
	private String idService;
	private BigDecimal price;
}
