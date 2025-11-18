package com.logu;

import java.util.Arrays;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class Insert_merchant_and_products {
	public static void main(String[] args) {
		EntityManagerFactory	fac=Persistence.createEntityManagerFactory("for_developer");
		EntityManager mam=fac.createEntityManager();
		EntityTransaction tran=mam.getTransaction();
		tran.begin();

		Merchant m=new Merchant();
		m.setName("loganathan");
		m.setPhone(123456789L);
		m.setEmail("vloganathantech@gmail.com");
		
		Product p1=new Product();
		p1.setName("Laptop");
		p1.setBrand("hp");
		p1.setType("electronics");
		p1.setCost(8695656);

		p1.setMerchant(m);
		
		
		Product p2=new Product();
		p2.setName("Pc");
		p2.setBrand("apple");
		p2.setType("electronics");
		p2.setCost(987654321);

		p2.setMerchant(m);
		

		
		m.setProducts(Arrays.asList(p1,p2));
		
		mam.persist(m);
		
		tran.commit();
		
	
	}
}
