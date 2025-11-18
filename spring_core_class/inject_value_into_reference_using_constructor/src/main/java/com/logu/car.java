package com.logu;

public class car {
	private engin Eng;
	public void run() {
		System.out.println("car is running since");
		Eng.start();
	}
	public car(engin eng) {
		super();
		Eng = eng;
	}
	
	
}
