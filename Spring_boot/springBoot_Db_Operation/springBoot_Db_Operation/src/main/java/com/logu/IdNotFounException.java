package com.logu;

public class IdNotFounException extends RuntimeException{
	
	@Override
	public String getMessage() {
		return "Id not found in db";
	}
	
}
