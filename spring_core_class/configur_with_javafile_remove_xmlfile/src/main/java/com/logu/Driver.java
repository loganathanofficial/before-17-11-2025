package com.logu;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Driver {
	public static void main(String[] args) {
		ApplicationContext acontext=new AnnotationConfigApplicationContext("com.logu");
		Employee emp=acontext.getBean("employee",Employee.class);
		System.out.println(emp.toString());
	}
}
