package com.logu;

import org.springframework.beans.factory.BeanFactory;
//import org.springframework.beans.factory.FactoryBean;
//import org.springframework.beans.factory.parsing.BeanEntry;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Driver {
	public static void main(String[] args) {
		BeanFactory beenfact=new ClassPathXmlApplicationContext("my_config.xml");
		student p=beenfact.getBean("mystudent" , student.class);
		System.out.println(p);
		
	}
}
