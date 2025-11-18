class Constructor{
	int id;
	String name;
	String job;
	double salary;
	String expereance;
	Constructor(int id,String name,String job,double salary,String expereance){
		this.id=id;
		this.name=name;
		this.job=job;
		this.salary=salary;
		this.expereance=expereance;
	}
	void info(){
		System.out.println(id+name+job+salary+expereance);
	}
	void updatesalary(double salary){
		this.salary=salary;
	}
}
class MainClass{
	public static void main(String arge[]){
		Constructor c1 = new Constructor(1,"loganathan","ceo",1000000.00,"4");
		c1.info();
		c1.updatesalary(488770000000.00);
		c1.info();
	} 
}
