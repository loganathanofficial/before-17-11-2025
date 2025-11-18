package com.logu.form;
import java.sql.*;


import java.io.IOException;
import java.io.PrintWriter;



import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/fs")
public class FirstServlet extends HttpServlet {

	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException 
	{
		
		String Sid =req.getParameter("id");
		int id=Integer.parseInt(Sid);
		
		
		String name=req.getParameter("name");
		String dept=req.getParameter("dept");
		
		String Sperc=req.getParameter("perc");
		double perc=Double.parseDouble(Sperc);
		
		PrintWriter out=resp.getWriter();
		out.println("<html><body><h1>hello i am printwriter</h1><html><body>");
		
		
		Connection con=null;
		PreparedStatement pstmt=null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");

			con=DriverManager.getConnection("jdbc:mysql://localhost:3306?user=root&password=admin");
			pstmt=con.prepareStatement("insert into servletdb.formdata values(?,?,?,?)");
			pstmt.setInt(1,  id);
			pstmt.setString(2,  name);
			pstmt.setString(3,  dept);
			pstmt.setDouble(4,  perc);
			
			pstmt.executeUpdate();
			
			System.out.println("your data has been inserted");
		} catch (ClassNotFoundException | SQLException e) {
			
//			System.out.println("you have did mistack while inserting!!!");
			e.printStackTrace();
		}
		
	}
		
		
}


