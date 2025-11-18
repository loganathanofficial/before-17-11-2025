public class searching{
	int [] arr={2,4,6,1,00};
	static int greater=0;
	int find(int[] arr ){
		for (int i=0;i<arr.length;i++){
			for(int j=i+1;j<arr.length;j++){
				if(arr[i]<=arr[j]){
					this.greater=arr[i];
				}
			}
		}
		return greater;
		
	}
	public static void main (String [] arge){
		searching s1=new searching();
		s1.find(s1.arr);
		System.out.println(s1.greater);
		
	}  
}
