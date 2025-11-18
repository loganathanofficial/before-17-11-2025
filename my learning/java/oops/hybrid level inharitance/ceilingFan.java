public class ceilingFan extends fan{
	ceilingFan(String model,String color,int price){
		super(model,color,price);
	}
	public static void main(String [] arge){
		ceilingFan f1=new ceilingFan("sibronix","white and black",15700);
		f1.fandetails();
		f1.on();
		f1.incspeed();
		f1.decspeed();
		f1.off();
		
	}
}
