public class fibonacii{
	public static void main(String args[]){
	int number1=0,number2=1,number3;
	for (int i=1;i<11;i++){
	number3=number1+number2;
	System.out.println(i+"."+number3);
	number1=number2;
	number2=number3;
	}
	}



}
