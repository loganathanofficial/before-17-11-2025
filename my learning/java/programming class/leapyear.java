public class leapyear{
	public static void main(String[] arge ){
	Integer year=2020;
	
	if(year%4==0&&year%100==0||year%400==0){
		System.out.println("Given year "+year+ " is not a leap year");
	}else{
		System.out.println("Given year "+year+ " is a leap year");
	}
	
	
	}
}
