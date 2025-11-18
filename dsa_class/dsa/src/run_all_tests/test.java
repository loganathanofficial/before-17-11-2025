package run_all_tests;
import java.util.Arrays;
//import java.util.Iterator;
public class test {
	public static void main(String[] args) {
		String name="loganathan";
		char arr[]=name.toCharArray();
//		int next=0;
		System.out.println("\n|   odd    |   even   |\n");
		for(int i=0;i<arr.length;i+=1)
		{	
			System.out.print("|");
			for (int j = 0; j < arr.length; j++) {
				
				if (i%2!=0) {
					System.out.print(arr[i]);
					
				}else {
					System.out.print(arr[i]);
				}
				
			}
			if(i%2!=0) {
				System.out.println("|");
			}
			
		}
			
	}
	 
}
