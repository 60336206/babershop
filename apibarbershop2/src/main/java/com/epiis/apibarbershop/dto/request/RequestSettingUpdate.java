package com.epiis.apibarbershop.dto.request;
import lombok.Getter; import lombok.Setter;
@Getter @Setter
public class RequestSettingUpdate {
	private String idSetting;
	private String businessName;
	private String address;
	private String phone;
	private String email;
	private String logo;
	private String openHour;
	private String closeHour;
}
