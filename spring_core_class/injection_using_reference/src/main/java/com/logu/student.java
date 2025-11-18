package com.logu;

import java.util.List;

public class student {
	private int id;
	private String name;
	private List<String> subject;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	@Override
	public String toString() {
		return "student [id=" + id + ", name=" + name + ", subject=" + subject + "]";
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<String> getSubject() {
		return subject;
	}
	public void setSubject(List<String> subject) {
		this.subject = subject;
	}
	

}
