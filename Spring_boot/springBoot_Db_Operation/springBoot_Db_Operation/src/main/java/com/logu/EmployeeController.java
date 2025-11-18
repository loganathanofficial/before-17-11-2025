package com.logu;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jsp/employee")
public class EmployeeController {
	
	@Autowired
	EmployeeRepository empRepo;
	
	@PostMapping  //("/employee")
	public ResponseEntity<ResponseStructure<Employee>> savEmployee(@RequestBody Employee employee) {
		
		empRepo.save(employee);
		ResponseStructure<Employee> structure=new  ResponseStructure<Employee>();
		structure.setStatuscode(HttpStatus.ACCEPTED.value());
		structure.setMessage("data has been saved");
		structure.setData(employee);
		
		ResponseEntity<ResponseStructure<Employee>> response=new ResponseEntity<ResponseStructure<Employee>>(structure,HttpStatus.ACCEPTED);
		
		return response;
	}
	@GetMapping   //("/employee")
	public ResponseStructure<List<Employee>> getalldata(){
		List<Employee> employees=empRepo.findAll();
		ResponseStructure<List<Employee>> structure=new ResponseStructure<List<Employee>>();
		structure.setStatuscode(HttpStatus.OK.value());
		structure.setMessage("success");
		structure.setData(employees);
		
		return structure;
		
	}
	
	@GetMapping("/{id}")
	public ResponseStructure<Employee> getById(@PathVariable int id) {
		
		Optional<Employee> opt=empRepo.findById(id);
		
		ResponseStructure<Employee> structure=new ResponseStructure<Employee>();
		
		
		if(opt.isPresent()) {
			structure.setStatuscode(HttpStatus.OK.value());
			structure.setMessage("success");
			structure.setData(opt.get());
			return structure;
		}else {
			
			throw new IdNotFounException();
		}
		
	}
	
	
	
	@GetMapping("/name/{name}")
	public ResponseStructure<List<Employee>> getById(@PathVariable String name) {
		
		List<Employee> opt=empRepo.findByName(name);
		
		ResponseStructure<List<Employee>> structure=new ResponseStructure<List<Employee>>();
		
		
		if(opt.isEmpty()) {
			throw new IdNotFounException();
		}else {
			structure.setStatuscode(HttpStatus.OK.value());
			structure.setMessage("success");
			structure.setData(opt);
			return structure;
			
		}
		
	}
	
	@PutMapping//("/employee")
	public ResponseEntity<ResponseStructure<Employee>> updateormergeemployee(@RequestBody Employee employee) {
//		if (condition) {} else {} we need to aply if condition to avoid exception foind what excepion it is
		empRepo.save(employee);
		
		ResponseStructure<Employee> structur = new ResponseStructure<Employee>();
		structur.setStatuscode(HttpStatus.ACCEPTED.value());
		structur.setMessage("data has been saved");
		structur.setData(employee);
		
		ResponseEntity<ResponseStructure<Employee>> response=new ResponseEntity<ResponseStructure<Employee>>(structur,HttpStatus.ACCEPTED);
		
		
		return response;
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ResponseStructure<Employee>> deleteemployeedata(@PathVariable int id) {
		
		Optional<Employee> opt=empRepo.findById(id);
		ResponseStructure<Employee> DeleteStructure = new ResponseStructure<Employee>();
		if (opt.isPresent()) {
		
			DeleteStructure.setStatuscode(HttpStatus.ACCEPTED.value());
			DeleteStructure.setMessage("data has been deleted");
			DeleteStructure.setData(opt.get());
			
			empRepo.delete(opt.get());
			
			return  new ResponseEntity<ResponseStructure<Employee>>(DeleteStructure,HttpStatus.ACCEPTED) ;
			
		} else {
			DeleteStructure.setStatuscode(HttpStatus.BAD_REQUEST.value());
			DeleteStructure.setMessage("no id found so cant delete the recodr");
			DeleteStructure.setData(opt.get());
			
			return new ResponseEntity<ResponseStructure<Employee>>(DeleteStructure,HttpStatus.BAD_REQUEST);
		}
	}
}
