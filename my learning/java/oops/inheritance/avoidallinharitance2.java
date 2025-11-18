class logu_bank_details{
	private long bankbalance=1000000;
	long Sccount_no=123456796;
	void outing(){
		System.out.println("your bank balance is : "+bankbalance);
	}
}

public class avoidallinharitance2 extends logu_bank_details{
	public static void main(String [] arge){
		avoidallinharitance details=new avoidallinharitance();
		details.outing();
		System.out.println(details.bankbalance);
	}
}
