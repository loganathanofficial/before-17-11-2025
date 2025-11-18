public class strongnumber{
	public static void main(String args[]){
		int num=40585,numcopy=num,last,factorial=1,op=0;
		while(num!=0){
			last=num%10;
			for(int i=1;i<=last;i++){
				factorial*=i;
			}
			op+=factorial;
			factorial=1;
			num/=10;
		}
		if(op==numcopy){
		System.out.println("The "+numcopy+" is a strong number");
		}
		else{
		System.out.println("The "+numcopy+" is not a strong number");
		}
	}
	
}
