package college.sort;

public class BSort {
	public static void main(String [] arge) {
		int arr[]= {10,9,8,7,6,5,4,3,2,1};
	
		
		for(int i=0;i<arr.length-1;i++) {
			
			for(int j=0;j<arr.length-1;j++) {
				
				if(arr[j]>arr[j+1]) {
					int temp=arr[j+1];
					arr[j+1]=arr[j];
					arr[j]=temp;
				}
				
			}
		}System.out.print("{");
		for(int ele:arr) {
			System.out.print(" "+ele);
		}System.out.print(" }");
	}
}
