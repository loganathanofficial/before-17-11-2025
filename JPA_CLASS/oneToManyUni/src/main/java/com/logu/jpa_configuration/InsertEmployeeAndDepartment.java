package com.logu.jpa_configuration;

import javax.persistence.*;

public class InsertEmployeeAndDepartment {
	public static void main(String[] args) {
		EntityManagerFactory fac=Persistence.createEntityManagerFactory("for_developer");
		EntityManager mam=fac.createEntityManager();
		EntityTransaction tran=mam.getTransaction();
		tran.begin();
		
		Employee e1=new Employee();
		e1.setName("loganathan");
		e1.setDecg("CEO");
		
		Department dept=new Department();
		dept.setName("Development");
		dept.setLoc("BTM");
		
		e1.setdepartment(dept);

		mam.persist(e1);
		
		tran.commit();
	}
	
}
