package com.logu;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class equestingDataUsing_QueryString {
	@GetMapping("/student")
	public String getStudent(@RequestParam int id,@RequestParam String name) {
		return "id : "+id+"\nname : "+name;
	}
	
	@GetMapping("/myToken")
	public String getTocken(@RequestHeader String token) {
		return "Token : "+token;
	}
}
