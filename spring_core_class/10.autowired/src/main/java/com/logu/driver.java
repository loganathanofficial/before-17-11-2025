package com.logu;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class driver {
	
	
	public static void main(String[] args) {
		ApplicationContext context= new AnnotationConfigApplicationContext("com.logu");
		Pasenger p=context.getBean("pasenger",Pasenger.class);
		System.out.println(p);
		p.travel();

	}
	
}
