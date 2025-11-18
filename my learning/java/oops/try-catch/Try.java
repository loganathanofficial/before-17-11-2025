public class Try{
	public static void main(String [] arge){
		System.out.println("\n\nmain is started");
		try{
			System.out.println("\ntry block is running");
			int a=100/0;
			int c=100/0;
			int b[]={};
			System.out.println(b[2]);
		}
		//order of catch block should be follow
		//first child class then parretn class it means all the exceptions are classes
		catch(ArithmeticException e){
			System.out.println("\ncatch block is exiquted");
		}
		catch(ArrayIndexOutOfBoundsException e){
			System.out.println("\ncatch block is exiquted");
		}
		catch(Throwable e){
			System.out.println("\ncatch block is exiquted");
		}
		
		finally{
			System.out.println("\nfinally block is exiquted");	
		}
	}
}
