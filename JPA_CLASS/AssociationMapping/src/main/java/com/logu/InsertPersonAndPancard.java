package com.logu;

import javax.persistence.*;
//import javax.persistence.Persistence;

public class InsertPersonAndPancard {
	
	public static void main(String[] args) {
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_Tester");
		EntityManager man=fac.createEntityManager();
		EntityTransaction tran=man.getTransaction();
		tran.begin();
		
		Person p=new Person();
//		p.setId(1);
		p.setName("loganathan");
		p.setPhone(6381696124l);
		
		Pancard pcard=new Pancard();
		
//		pcard.setId(1);..
		pcard.setPnumber("123456");
		pcard.setPincode(1234);
		
		
		p.setCard(pcard);
		
	
		man.persist(p);
		man.persist(pcard);
	
	
		tran.commit();
		
		System.out.println("you data has been inserted succesfully !!!");
	
	
	}
	
	
	
}
