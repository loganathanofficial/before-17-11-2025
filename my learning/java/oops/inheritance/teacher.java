class parent_or_super_or_base_Class_of_details{
	String name,position,join_date,joined_school;
	int age,experiance;
	void info(){
		System.out.println("\nName         : "+name+"\nPosition     : "+position+"\nJoin_Date    : "+join_date+"\nJoined_School: "+joined_school+"\nAge          : "+age+"\nExperiance   : "+experiance);	
	}
}
class principal extends parent_or_super_or_base_Class_of_details{
	void Data_Entry(){
		principal d1=new principal();
		
		d1.name="logu";
		d1.position="principal";
		d1.join_date="28/07/2035";
		d1.joined_school="logic_HSS";
		d1.age=30;
		d1.experiance=5;
		//
		System.out.println("\nName         : "+d1.name+"\nPosition     : "+d1.position+"\nJoin_Date    : "+d1.join_date+"\nJoined_School: "+d1.joined_school+"\nAge          : "+d1.age+"\nExperiance   : "+d1.experiance);
		
	}
	
}
public class teacher extends parent_or_super_or_base_Class_of_details{
	public static void main(String [] arge){
		teacher t1=new teacher();
		t1.info();
		t1.name="loganathan";
		t1.position="logical";
		t1.join_date="28/07/2030";
		t1.joined_school="logic_HSS";
		t1.age=25;
		t1.experiance=3;
		t1.info();
		//
		principal p1=new principal();
		p1.Data_Entry();
		
	}
}
