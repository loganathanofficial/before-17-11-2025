package com.logu;

import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;



public class Driver {
	public static void main(String[] args) {
		ApplicationContext app=new AnnotationConfigApplicationContext(Config.class);
		ShapeApp s=app.getBean("shapeApp",ShapeApp.class);
		s.disply();
		
		Scanner sc=app.getBean("scanner",Scanner.class);
		System.out.println(sc);
	}
}



