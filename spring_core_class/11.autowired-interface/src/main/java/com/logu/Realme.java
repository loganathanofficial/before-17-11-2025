package com.logu;

import org.springframework.stereotype.Component;

@Component
public class Realme implements Mobile {
	
	@Override
	public void call() {
		System.out.println("realme is calling");
	}

}
