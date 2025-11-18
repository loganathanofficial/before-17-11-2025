package com.logu.jpa_configuration;

import javax.persistence.*;

@Entity
public class Employee {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private String decg;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Department department;

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

	public String getDecg() {
		return decg;
	}

	public void setDecg(String decg) {
		this.decg = decg;
	}

	public Department getdepartment() {
		return department;
	}

	public void setdepartment(Department department) {
		this.department = department;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", decg=" + decg + "]";
	}
	
	//getters and setters
	
	
}
