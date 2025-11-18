public class sorting{
	public static void main(String [] arge){
		int [] arr={1,3,2,4,5,1,0,-1,-2};
		int loopitteration=0,Ifitteration=0;
		System.out.println("\n|Unsorted array :");
		System.out.println("|~~~~~~~~~~~~~~");
		System.out.print("value :");
		for(int i=0;i<arr.length;i++){
			System.out.print("|"+arr[i]+"| ");
		}
		System.out.print("\nindex :");
		for(int i=0;i<arr.length;i++){
			System.out.print("|"+i+"| ");
		}
		System.out.println("\n\n");
		for(int i=0;i<arr.length;i++){
			
			
			for(int j=i+1;j<arr.length;j++){
				
				if(arr[i]>arr[j]){
				System.out.print(arr[i]+"--> ");
					int smoll=arr[i];
					arr[i]=arr[j];
					arr[j]=smoll;
					Ifitteration++;
	
				}
			loopitteration++;
			}
			System.out.println(arr[i]);
		}
		System.out.println("loopitteration is : "+loopitteration+"\nIfitteration is :"+Ifitteration);
		
		System.out.println("\n|Sorted array");
		System.out.println("|~~~~~~~~~~~~");
		System.out.print("value :");
		for(int i=0;i<arr.length;i++){
			System.out.print("|"+arr[i]+"| ");
		}
		System.out.print("\nindex :");
		
		System.out.print("| "+0+"| ");
		System.out.print("| "+1+"| ");
		for(int i=2;i<arr.length;i++){
			System.out.print("|"+i+"| ");
		}
	}
}
