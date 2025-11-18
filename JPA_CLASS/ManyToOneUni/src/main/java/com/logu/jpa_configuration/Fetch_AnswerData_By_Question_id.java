package com.logu.jpa_configuration;

import java.util.List;
import java.util.Scanner;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

public class Fetch_AnswerData_By_Question_id {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Question id : ");
		int Qid=sc.nextInt();
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_developer");
		EntityManager man=fac.createEntityManager();
		Query q=man.createQuery("select a from AnswerData a where a.question.id=?1");
		q.setParameter(1, Qid);
		List<AnswerData> answer= q.getResultList();
		
		if (answer.size()>0) {
			for (AnswerData answerData : answer) {
				System.out.println(answerData);
			}
		} else {
			System.err.println("no data found since invalid entered data ");
		}
	}
}
