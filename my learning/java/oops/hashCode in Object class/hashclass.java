public class hashclass{
	public static void main(String [] arge){
		Object o1=new Object();
		Object n1=o1.hashCode();//hashCode method
		System.out.println("o1 hashcode value is : "+n1);

		hashclass h1=new hashclass();
		int n2=h1.hashCode();
		System.out.println("n1 hashcode value is : "+n2);
		
			// fun testing but its working fine
		Object test_value=1.2334;
		System.out.println("test value is : "+test_value);
		
		Object [] arr={1,"loganathan",2,3,4,5}; 
		System.out.println("test arr[1] value is : "+arr[1]);
		//Object sum=(arr[3])+(arr[4]);
		//System.out.println(sum);
	}
}
