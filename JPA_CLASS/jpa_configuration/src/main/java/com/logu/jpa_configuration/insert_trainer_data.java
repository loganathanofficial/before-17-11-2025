package com.logu.jpa_configuration;

import javax.persistence.*;

public class insert_trainer_data {
	public static void main(String[] args) {
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_developer");
		EntityManager man=fac.createEntityManager();
		EntityTransaction tran=man.getTransaction();
		tran.begin();
		
		Trainer t=new Trainer();
		t.setName("keshava");
		t.setSalary(987654321.00);
		t.setSubject("javaAndcollection");
		t.setPassword("btm123");
		
		
		man.persist(t);
		tran.commit();
	}
}
