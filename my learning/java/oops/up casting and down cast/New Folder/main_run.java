
class apple{
	String model="apple m pro";
	int price = 210000;
	void getapple(){
		System.out.println(this.model+"\n"+this.price);
	}
}
class samesunge{
	String model="sam y21 pro";
	int price = 100000;
	void getsamesunge(){
		System.out.println(this.model+"\n"+this.price);
	}
	
	
}
class mobilestor{
	
	Object getmobile(String input)
	{
		if(input.equalsIgnoreCase("apple")){
			return new apple();
		}else if(input.equalsIgnoreCase("samesunge")){
			return new samesunge();
		}
		else{	
			System.out.println("invalid input : apple/samesunge");
			return null;
		}
	}

}
public class main_run{
	public static void main(String arge []){
		mobilestor m1=new mobilestor();
		
		
		Object mobile=m1.getmobile("apple");
		apple ap=(apple)mobile;
		ap.getapple();
	}
}















