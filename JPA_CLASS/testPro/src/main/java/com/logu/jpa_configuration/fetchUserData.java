package com.logu.jpa_configuration;

import java.util.Scanner;

import javax.persistence.*;


public class fetchUserData {
	public static void main(String[] args) {
		
		
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("developer");
		EntityManager mam=fac.createEntityManager();
		
		Query q=mam.createQuery("select u from User u where u.card.id=?1");
		
		Scanner sc = new Scanner(System.in);
		System.out.println("enter id :");
		int id=sc.nextInt();
		
		q.setParameter(1, id);
		
		try {
			User u=(User) q.getSingleResult();
			System.out.println(u);
		} catch (NoResultException e) {
			System.err.println("the user data not found");
		}
	}
}
