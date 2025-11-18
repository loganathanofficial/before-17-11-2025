package com.logu.jpa_configuration;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class InsertAnswerAndQuestion {
	public static void main(String[] args) {
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_developer");
		EntityManager man=fac.createEntityManager();
		EntityTransaction tran=man.getTransaction();
		tran.begin();
		
		QuestionData u=new QuestionData();
		u.setQuestion("what is the importent thing in eviryon life");
		u.setQuestionedBy("Loganathan");
		
		AnswerData a1=new AnswerData();
		a1.setQuestion(u);
		a1.setAnswer("Family and Education");
		a1.setAnsweredBy("Guru Sir");
		
		AnswerData a2=new AnswerData();
		a2.setQuestion(u);
		a2.setAnswer("job with salary");
		a2.setAnsweredBy("Dhanush");
		
		AnswerData a3=new AnswerData();
		a3.setQuestion(u);
		a3.setAnswer("food and body");
		a3.setAnsweredBy("Dhanush");
		
		man.persist(a1);
		man.persist(a2);
		man.persist(a3);

		tran.commit();
	}
	
}
