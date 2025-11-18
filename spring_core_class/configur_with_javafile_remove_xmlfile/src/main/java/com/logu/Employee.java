package com.logu;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Employee {
	
	@Value("loganathan")
	private String name;
	
	@Value("working")
	private String status;

	@Override
	public String toString() {
		return "Employee [name=" + name + ", status=" + status + "]";
	}
	
	
	
	
}
