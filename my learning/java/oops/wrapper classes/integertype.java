public class integertype{
	public static void main(String [] arge){
		Integer i1=100;
		System.out.println(i1);
		
		//i1.hashCode();
		System.out.println(i1.hashCode()); 
		
		//i1.toString();
		System.out.println(i1.toString());
		
		//i1.equals(); but
		System.out.println(i1.equals(i1.hashCode()));
		
		System.out.println(i1.equals(i1.toString()));
	}
}
