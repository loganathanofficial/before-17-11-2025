public class hashcode{

	public static void main(String [] arge){
		Object o1=new Object();
		Object n1=o1.hashCode();
		Object n2=n1;
		// it is object class method but we can overrid the all object class methods
		System.out.println("n1 and n1  object in memory is equal or not :" + n1.equals(n2));
	}
}
