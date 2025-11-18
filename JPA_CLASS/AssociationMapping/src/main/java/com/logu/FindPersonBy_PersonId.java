package com.logu;

import java.util.List;
import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class FindPersonBy_PersonId {
	public static void main(String[] args) {
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_Tester");
		EntityManager man=fac.createEntityManager();
		
		//find person by person id
		try {
			Person p=man.find(Person.class, 1);
			System.out.println(p);
		} catch (NoResultException e) {
			System.err.println("no data found ");
		}
		
		
		//find person by person name
				Query q=man.createQuery("select p from Person p where p.name=?1");
				Scanner sc=new Scanner(System.in);
				System.out.println("Enter a name :");
				String name=sc.next();
				q.setParameter(1, name);
				
				List<Person> pp=q.getResultList();
				
				if(pp.size()>0) {
					for (Person person : pp) {
						System.out.println(person);
					}
				}else {
					System.err.println("no data fount ");
				}
		
		
	}
}
