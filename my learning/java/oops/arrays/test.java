public class array2{
	public static void main(String[] args){
		int names[];
		names=new int[4];
		names[3]=33;
		names[2]=22;
		names[2]=33;
		names[0]=00;
		for(int i=names.length-1;i>=0;i--){
			System.out.println(names[i]);
		}
		
	}

}
