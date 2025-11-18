class test_this{
	void test(){
		System.out.println(this+" this is test class");
	
	}
}


public class This{
	void test()
	{
		System.out.println(this+" this is This main class");
	
	}
	public static void main(String [] arge){
		//System.out.println(this+" this class");
		test_this n1=new test_this();
		This n2=new This();
		n1.test();
		n2.test();
	
	}
}
