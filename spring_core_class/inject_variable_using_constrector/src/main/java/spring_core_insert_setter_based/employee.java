package spring_core_insert_setter_based;

import java.util.Map;

public class employee {
	private int id;
	private String name;
	private Double salary;
	public employee(int id, String name, Double salary) {
		super();
		this.id = id;
		this.name = name;
		this.salary = salary;
	}
	@Override
	public String toString() {
		return "employee [id=" + id + ", name=" + name + ", salary=" + salary + "]";
	}
	
	
	
	
	
	
	
}
