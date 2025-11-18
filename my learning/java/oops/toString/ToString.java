package toString;
import toString.foroverrid;
public class ToString extends foroverrid{
	public static void main(String [] arge){
		ToString t1=new ToString();
		int num1=t1.hashCode();
		System.out.println(num1);
		System.out.println(new ToString());
		
		
		//--------------------
		
		foroverrid f1=new foroverrid();
		int num2=f1.hashCode();
		System.out.println(num2);
		
		
		//-*-*-*-*-*-*-*-*-*-*-*-8
		Object o1=new Object();
		System.out.println(new Object());
		System.out.println(o1.hashCode());
		//System.out.println(Object.hashCode());
		//System.out.println(Object.toString());
		
	}
}
