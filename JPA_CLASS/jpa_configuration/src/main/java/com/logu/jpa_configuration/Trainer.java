package com.logu.jpa_configuration;

import javax.persistence.*;
@NamedQueries(value = {

		@NamedQuery(name = "",query = "")
		
})


@Entity
@Table(name = "Trainer")
public class Trainer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="password")
	private String password;
	
	@Column(name="name",nullable = false)
	private String name; 
	
	@Column(nullable = false,unique = true)
	private String subject;
	
	@Column(nullable = false)
	private double salary;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Trainer [id=" + id + ", name=" + name + ", subject=" + subject + ", salary=" + salary + "]";
	}

	
}
