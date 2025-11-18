package com.logu.jpa_configuration;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class FetchAllTrainers {
	public static void main(String[] args) {
		
		

		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_developer");
		EntityManager man=fac.createEntityManager();
		Query q=man.createQuery("select t from Trainer t");
		
		List<Trainer> t=q.getResultList();
		
		if(t.size()>0) {
			for (Trainer trainer : t) {
				System.out.println(trainer);
			}
		}else {
			System.out.println("no trainers are working");
		}

	}	
}
