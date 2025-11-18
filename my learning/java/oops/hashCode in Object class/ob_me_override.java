public class ob_me_override{
	@Override
	public int hashCode(){
		return 1234567890;
	}
	

	public static void main(String [] arge){
	
		ob_me_override o1=new ob_me_override();
		int n1=o1.hashCode();
		ob_me_override o2=new ob_me_override();
		int n2=o2.hashCode();
		// it is object class method but we can overrid the all object class methods
		System.out.println("\n\nn1 and n1 addres are overrided : `.` \n\nn1--->"+n1+"\nn2--->"+n2);
	
		Object o3=new Object();
		Object n3=o3.hashCode();
		Object o4=new Object();
		Object n4=o4.hashCode();
		// it is object class method we can overrid the all object class methods but we dont modify the any of methods 
		System.out.println("\n\nthis is object class hashCode method : `.` \n\nn1--->"+n3+"\nn2--->"+n4);
	}
}
