public class non_statick_block {
	{
		System.out.println("loganathan block 1");
	}
	non_statick_block () 
	{
		System.out.println("zoro paramiter Constrector is running\n\n\n/n");
	}
	
	
	{
		System.out.println("loganathan block 2");
	}
	
	
	
	// the all block's are first going to place in saide of the constrector 
	public static void main(String [] arge)
	{
		non_statick_block b1=new non_statick_block();
		System.out.println("main is runnings");
		non_statick_block b2=new non_statick_block();
	}  
	
}
