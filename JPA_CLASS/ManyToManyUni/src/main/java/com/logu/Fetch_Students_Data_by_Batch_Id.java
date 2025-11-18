package com.logu;

import java.util.List;
import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class Fetch_Students_Data_by_Batch_Id {
	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Batch id : ");
		int Bid =sc.nextInt();
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_developer");
		EntityManager man=fac.createEntityManager();
		
//		man.find(Students.class, 1) we can do i this way also
		
		Query q=man.createQuery("select b.students from Batch b where b.id=?1");
		
		q.setParameter(1, Bid);
		
		List<Student> ss = q.getResultList();
		
		if(ss.size()>0) {
			for (Student student : ss) {
				System.out.println(student);
			}
		}else {
			System.out.println("no data found ");
		}
	}
}
