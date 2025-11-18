package com.logu.jpa_configuration;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class FetchAndUpdateWay {
	public static void main(String[] args) {
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_developer");
		EntityManager mamager=fac.createEntityManager();
		EntityTransaction tran=mamager.getTransaction();
		tran.begin();
		
		Trainer t=mamager.find(Trainer.class, 1);
		if(t!=null) {
			t.setName("logu");
			t.setSalary(900000.00);
			t.setSubject("spring boot");
			
			tran.commit();
			System.out.println("your data has been updated using the way is fetch and update");
		}
	}
}
