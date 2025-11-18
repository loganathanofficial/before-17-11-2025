public class non_statick_block {
	{
		System.out.println("\n\n\nloganathan block 1");
	}
	non_statick_block () 
	
	{	
		// *** this is the working  of block flow   ***  //
		
		/*{
			System.out.println("loganathan block 1");
	        }
	        {
			System.out.println("loganathan block 1");
		}*/
		
		System.out.println("zoro paramiter Constrector is running ");
	}
	
	
	{
		System.out.println("loganathan block 2");
	}
	
	
	
	// the all block's are first going to place in saide of the constrector 
	public static void main(String [] arge)
	{
		non_statick_block b1=new non_statick_block();
		non_statick_block b2=new non_statick_block();
	}  
	
}
