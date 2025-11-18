
// this is called explicit chining constructod
public class son extends dad {
	son(String dadName,int age){
		super(dadName,age);
	}
	public static void main(String [] arge){
		String dadName="vellamani";
		int age=37;
		son s1=new son(dadName,age);
		System.out.println(s1.dadName+"\n"+s1.age);
	}
}
