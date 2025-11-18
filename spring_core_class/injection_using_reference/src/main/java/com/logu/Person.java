package com.logu;

public class Person {
	private Mobile mobile;
	public void use() {
		System.out.println("persong is using mobile ");
		mobile.toString();
	}
	public Mobile getMobile() {
		return mobile;
	}
	public void setMobile(Mobile mobile) {
		this.mobile = mobile;
	}
}
