package testjava;


public class ArrayTest {
	int[] arr = new int[3];	
	
	public static void main(String name[]) { 
		printArrValue();
	}
	
	static private void printArrValue() {
		ArrayTest atest = new ArrayTest();
		
		for (int i=0; i < atest.arr.length ; i++){
			System.out.print("->"+atest.arr[i]);
				
		}
		
	}
	

}
