public class Method1{
	public static void method1(){
		System.out.println("method 1");
	}
	public static void method2(){
		System.out.println("method 2");
		method1();
		method1();
	}
	public static void main(String args[]){
		System.out.println("main method");
		method2();
		method1();
		method1();
		
	}
}
