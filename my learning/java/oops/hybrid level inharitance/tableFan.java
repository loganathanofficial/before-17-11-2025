public class tableFan extends fan{
	tableFan(String model,String color,int price){
		super(model,color,price);
	}
	public static void main(String [] arge){
		tableFan f1=new tableFan("sony","white",20000);
		f1.fandetails();
		f1.on();
		f1.incspeed();
		f1.decspeed();
		f1.off();
		
	}
}
