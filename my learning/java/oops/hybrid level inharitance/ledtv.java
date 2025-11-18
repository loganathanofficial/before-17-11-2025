public class ledtv extends tv{
	ledtv(String model,int size,int price){
		super(model,size,price);
	}
	public static void main(String [] arge){
		ledtv l1=new ledtv("m16",65,65000);
		l1.tvdetails();
		l1.on();
		l1.off();
		
	}
}
