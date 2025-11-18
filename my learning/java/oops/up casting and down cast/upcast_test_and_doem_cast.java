public class upcast_test_and_doem_cast{
	public static void main(String [] arge){
		bike b1=new bike("splendor","a21splendor",63200);
		bike b2=new bike("mt","mt121",134200);
		bike b3=new bike("ninja","a21splendor",9023200);
		
		employee e1=new employee(1,"loganathan",234567);
	
		
		Object arr[] = {e1,b1,b2,b3};
		
		for(int i=0;i<arr.length;i++){
			
			if(arr[i] instanceof bike){
				bike b=(bike)arr[i];
				b.info();
			}else{
				employee e=(employee)arr[i];
				e.info();
			}
		}
			
		
		
	}

}

class bike{
	String name,model;
	int price;
	public bike(String name,String model,int price){
		this.name=name;
		this.model=model;
		this.price=price;
	}
	void info(){
		System.out.println(this.name+" "+this.model+" "+this.price);
	}
}
class employee{
	int id,salary;
	String name;
	employee(int id,String name,int salary){
		this.id=id;
		this.name=name;
		this.salary=salary;
	}
	void info(){
		System.out.println(this.id+" "+this.name+" "+this.salary);	
	}
	
}
