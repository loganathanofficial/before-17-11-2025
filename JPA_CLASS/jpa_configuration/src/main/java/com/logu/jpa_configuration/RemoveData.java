package com.logu.jpa_configuration;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class RemoveData {
	public static void main(String[] args) {
		EntityManagerFactory factory=Persistence.createEntityManagerFactory("for_developer");
		EntityManager manager=factory.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		tran.begin();
		
		Trainer t=manager.find(Trainer.class, 3);
		
		if(t!=null) {
			
			manager.remove(t);
			tran.commit();
			
			System.out.println("your data has been deleted succesfully!!!");
		
		}else {
			System.out.println("your entered id is invalid");
		}
		
		
		
	}
}
