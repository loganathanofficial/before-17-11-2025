package com.logu;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(IdNotFounException.class)
	public ResponseEntity<ResponseStructure<String>> HandleIdNotFounException(IdNotFounException idnfe){
		
		ResponseStructure<String> str= new ResponseStructure<String>();
		str.setStatuscode(HttpStatus.NOT_FOUND.value());
		str.setMessage("failed");
		str.setData(idnfe.getMessage());
		return new ResponseEntity<ResponseStructure<String>>(str,HttpStatus.NOT_FOUND);
		
	}
	

//	@ExceptionHandler(IdNotFounException.class)
//	public ResponseEntity<ResponseStructure<String>> HandleIdNotFounException1(IdNotFounException idnfe){
//		
//		ResponseStructure<String> str= new ResponseStructure<String>();
//		str.setStatuscode(HttpStatus.NOT_FOUND.value());
//		str.setMessage("failed");
//		str.setData(idnfe.getMessage());
//		return new ResponseEntity<ResponseStructure<String>>(str,HttpStatus.NOT_FOUND);
//		
//	}
	
	

}
