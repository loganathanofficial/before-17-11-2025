public class fan implements iswitch,iregulator {
	String model,color;
	int price;
	fan(String model,String color,int price){
		this.model=model;this.color=color;this.price=price;
	}
	void fandetails(){
		System.out.println(" \nFAN-Model :"+this.model+" \nColor:"+this.color+" \nPrice :"+this.price);
	}
	@Override	
	public void on(){
		System.out.println(this+"is now on..");
	}
	@Override	
	public void off(){
		System.out.println(this+"is now off..");
	}
	@Override	
	public void incspeed(){
		System.out.println(this+"speed is increesed..");
	}
	public void decspeed(){
		System.out.println(this+"speed is decreesed..");
	}
	
}
