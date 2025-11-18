package com.logu;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StudentController {
	@GetMapping("/student")
	public String setStudentInfo() {
		return "student.jsp";
	}
	
	@GetMapping("/employee")
	public String setEmployeeInfo(Model model) {
		model.addAttribute("name","loganathan");
		model.addAttribute("place","tamil nadu");
		return "employee.jsp";
	}
}
