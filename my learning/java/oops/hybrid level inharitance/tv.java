public class tv implements iswitch {
	String model;
	int size,price;
	tv(String model,int size,int price){
		this.model=model;this.size=size;this.price=price;
	}
	void tvdetails(){
		System.out.println(" \nTV-Model :"+this.model+" \nSize :"+this.size+" \nPrice :"+this.price);
	}
	@Override	
	public void on(){
		System.out.println(this+"is now on..");
	}
	@Override	
	public void off(){
		System.out.println(this+"is now off..");
	}
	/*@Override	
	public void incspeed(){
		System.out.println(this+"speed is increesed..");
	}
	public void decspeed(){
		System.out.println(this+"speed is decreesed..");
	}*/
	
}
