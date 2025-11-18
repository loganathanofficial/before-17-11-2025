package com.logu.jpa_configuration;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class testCFG {
	public static void main(String[] args) {
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_developer");
		System.out.println(fac);
	}
}
