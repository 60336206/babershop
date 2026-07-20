package com.epiis.apibarbershop.dto.request;
import java.math.BigDecimal;
import java.util.List;
import lombok.Getter; import lombok.Setter;
@Getter @Setter
public class RequestAppointmentInsert {
	private String idCustomer;
	private String idUser;
	private String appointmentDate;
	private String startHour;
	private String endHour;
	private BigDecimal total;
	private String observation;
	private List<RequestAppointmentDetailInsert> details;
}
