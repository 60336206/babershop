package com.epiis.apibarbershop.dto.request;
import java.math.BigDecimal;
import lombok.Getter; import lombok.Setter;
@Getter @Setter
public class RequestPaymentInsert {
	private String idAppointment;
	private BigDecimal amount;
	private String paymentMethod;
}
