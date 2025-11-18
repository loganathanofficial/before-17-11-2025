package com.logu.jpa_configuration;

import javax.persistence.*;

@Entity
public class AadharCard {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private long number;
	private String loc;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public long getNumber() {
		return number;
	}
	public void setNumber(long number) {
		this.number = number;
	}
	public String getLoc() {
		return loc;
	}
	public void setLoc(String loc) {
		this.loc = loc;
	}
	
	
	@Override
	public String toString() {
		return "AadharCard [id=" + id + ", number=" + number + ", loc=" + loc + "]";
	}
	
}
