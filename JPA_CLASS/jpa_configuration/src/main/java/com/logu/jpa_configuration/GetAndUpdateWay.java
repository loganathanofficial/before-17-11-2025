package com.logu.jpa_configuration;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class GetAndUpdateWay {

	public static void main(String[] args) {
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_developer");
		EntityManager man=fac.createEntityManager();
		EntityTransaction tran=man.getTransaction();
		tran.begin();
		
		Trainer t=new Trainer();
		
		t.setId(3);
		t.setName("guru");
		t.setSalary(20000.00);
		t.setSubject("jpa");
		
		man.merge(t);
		
		tran.commit();
	}
}
