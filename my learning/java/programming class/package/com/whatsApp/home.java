package com.whatsApp;
import com.whatsApp.login;
public class home{
	public static void main (String[] arge){
		login l1=new login();
		
		System.out.println(l1.phone);
		System.out.println(l1.username);
		//System.out.println(l1.password); cant access the private member
	}
}
