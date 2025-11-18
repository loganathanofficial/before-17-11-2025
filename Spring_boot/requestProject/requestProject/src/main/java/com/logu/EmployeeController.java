package com.logu;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
	@GetMapping("/employee/{age}/{name}")
	public String getEmployee(@PathVariable int age,@PathVariable String name) {
		return age+name;
		
	}
	
}
