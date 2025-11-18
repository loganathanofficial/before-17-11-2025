public class array2{
	public static void main(String[] arge){
		
		String [] args;
		args=new String[4];
		args[0]="loganathan";
		args[1]="karthik";
		args[2]=arge[0];
		args[3]=arge[1];
		for(int i=0;i<args.length;i++){
			System.out.println(args[i].toLowerCase());
		}
		for(int i=0;i<args.length;i++){
			args[i]=args[i].toUpperCase();
			System.out.println(args[i]);
			
		}
		//array update
		System.out.println(args[0]);
		//
		char [] name1=args[0].toCharArray();
		for(int i=0;i<name1.length;i++){
			System.out.println("\n name1 array index :"+i+" is-->"+name1[i]);
		}
	}

}
