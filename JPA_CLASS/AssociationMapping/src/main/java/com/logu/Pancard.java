package com.logu;

import javax.persistence.*;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;

@Entity
public class Pancard {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String pnumber;
	
	private int pincode;

	

	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getPnumber() {
		return pnumber;
	}



	public void setPnumber(String pnumber) {
		this.pnumber = pnumber;
	}



	public int getPincode() {
		return pincode;
	}



	public void setPincode(int pincode) {
		this.pincode = pincode;
	}



	@Override
	public String toString() {
		return "Pancard [id=" + id + ", pnumber=" + pnumber + ", pincode=" + pincode + "]";
	}
	
	
	
}
