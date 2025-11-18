package multiplt;

public class childe implements dad,mom {

	
	
	@Override
	public void fun() {
		System.out.println("fun dad");
	}
	
	public static void main(String[] args) {
		childe c=new childe();
		c.fun();
	}

	

}
