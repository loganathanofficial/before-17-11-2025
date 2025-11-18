package com.ogu;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class EmpController {
	
	
	@GetMapping("/EmpData")
	public String EmpInfo(Model model) {
		model.addAttribute("time","7.30 AM");
		return "EmpInformations.jsp";
		
	}
	
	
	@GetMapping("/Studentdata")
	public String Studentnfo(ModelMap map1) {
		map1.put("sname","loganathan");
		map1.put("splace","yercadu");
//		
//		Map<String, Integer> map2=new LinkedHashMap();
//		map2.a
		
		return "StudentData.jsp";
		
	}
	
	
	@GetMapping("/shopedata")
	public ModelAndView getShope() {
		
		ModelAndView view=new ModelAndView("shope.jsp");
		
		view.addObject("shopename","loguShope");
		view.addObject("shopeloc","BtM");
	
		int [] arr= {1,2,3,4,5};
		view.addObject("arr",arr);
		
		return view;
		
		
		
		
		
		
	}
}
