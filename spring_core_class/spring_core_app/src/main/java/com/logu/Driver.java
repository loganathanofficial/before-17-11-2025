package com.logu;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;

public class Driver {

	public static void main(String[] args) {
		BeanFactory fac=new ClassPathXmlApplicationContext("configuration.xml");
		Person p=fac.getBean("myperson",Person.class);
		System.out.println(p);
	}
}
