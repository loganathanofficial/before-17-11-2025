public class demo1{
	public static void main(String [] arge){
		System.out.println("exception demo1 starting");
		try{
			System.out.println(10/0);
			
			
		
		}
		catch(ArithmeticException exp){
		
		
			exp.printStackTrace();
		}
		
		
	}
}
