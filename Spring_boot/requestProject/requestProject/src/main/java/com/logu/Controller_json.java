package com.logu;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller_json {
	
	@PostMapping("/student")
	public String sinfo(@RequestBody Student student) {
		return student.toString();
	}
}
