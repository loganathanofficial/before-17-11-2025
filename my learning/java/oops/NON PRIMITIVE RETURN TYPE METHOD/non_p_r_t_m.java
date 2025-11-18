class tea{
	
	String name="black tea";
	int price = 1230;
	
	public String toString(){
		return this.name+""+this.price;
	}
}
class coffee{
	String name="hot coffee";
	int price = 99999;
	
	public String toString(){
		return this.name+""+this.price;
	}
}
public class non_p_r_t_m{
	static tea grttea(){
		return new tea();
	}
	static coffee getcoffee(){
		return new coffee();
	}
	public static void main(String [] arge){
		System.out.println(grttea());
		System.out.println(getcoffee());
		
	}
}
