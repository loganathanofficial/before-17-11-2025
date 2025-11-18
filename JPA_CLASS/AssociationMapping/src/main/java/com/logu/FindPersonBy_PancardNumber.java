package com.logu;

import java.util.List;
import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class FindPersonBy_PancardNumber {
	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter pancard number :");
		String panNumber=sc.next();
		
		
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_Tester");
		EntityManager man=fac.createEntityManager();
		Query q=man.createQuery("select p from Person p where p.card.pnumber=?1");
		
		q.setParameter(1, panNumber);
		
		
		
		
		
		//find person by pancard number
		
			List<Person>p= q.getResultList();
		if(p.size()>0) {
			for (Person person : p) {
				System.out.println(person);
			}
		}else{
			System.err.println("no data found ");
		}
		
	}
}
