
// this is called explicit chining constructod

public class dotter extends dad {
	dotter(String dadName,int age){
		super(dadName,age);
	}
	public static void main(String [] arge){
		String dadName="ravi";
		int age=32;
		dotter d1=new dotter(dadName,age);
		System.out.println(d1.dadName+"\n"+d1.age);
	}
}
