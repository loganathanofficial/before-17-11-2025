public class lcdtv extends tv{
	lcdtv(String model,int size,int price){
		super(model,size,price);
	}
	public static void main(String [] arge){
		ledtv l1=new ledtv("cd6l123",100,45000);
		l1.tvdetails();
		l1.on();
		l1.off();
		
	}
}
