class searching{
	void search(int i){
		int [] arr={56,67,77,21,100};
		int max=arr[1];
		int i=i++;
		if(max<=arr[i]){
			max=arr[i]
			System.out.println("\ncompair : "+max+"<"+arr[i]+"-->is Tue");
		}else{
			System.out.println("\ncompair : "+max+"<"+arr[i]+"-->is false");
		}
		
	
	}
	public static void main(String [] arge){
		
		search search=new search();
		if(arr.length>=search.i){
			search.search();
		}
	}
}
