package com.logu.jpa_configuration;


import javax.persistence.*;

public class InsertData {
	public static void main(String[] args) {
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("developer");
		EntityManager mam=fac.createEntityManager();
		EntityTransaction tran=mam.getTransaction();
		tran.begin();
		
		User u=new User();
		u.setName("loganathan");
		u.setNumber(9876543210l);
		
		AadharCard a=new AadharCard();
		a.setNumber(1234567899876l);
		a.setLoc("salem");
		u.setCard(a);
		
		mam.persist(u);
		
		tran.commit();
	}
	
}
