package com.logu.jpa_configuration;

import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class VerifyNameAndPassword {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		
		System.out.println("Enter name :");
		String Tid=sc.next();
		

		System.out.println("Enter password :");
		String pw=sc.next();
		
		
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_developer");
		EntityManager man=fac.createEntityManager();
		Query q=man.createQuery("select t from Trainer t where t.name=?1 and t.password=?2");
		
		q.setParameter(1, Tid);
		q.setParameter(2,pw);
		
		try {
			Trainer t=(Trainer) q.getSingleResult();
			System.out.println(t);
			System.out.println("The Trainer verification has been succesfull !!");
		} catch (Exception e) {
			System.err.println("your not a Trainer");
		}
		
		
		
	}
}
