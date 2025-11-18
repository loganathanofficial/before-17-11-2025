public class noofdigits{
	public static void main(String args[]){
	 int number=123456789,yournumber=number,digits=0;
	System.out.println("your number is :"+yournumber);
		for(;1<number;){
		number=number/10;
		System.out.println("number is : "+number);
		++digits;
		while(1==number){
		++digits;
		--number;	
		}
		}
	System.out.println("and number of digit present in "+yournumber+": "+digits+" digits");
	}



}
