public class user_defined_exception{
	public static void main(String [] arge){
		System.out.println("exception demo1 starting");
		try{
			throw new myException("fun exception or test exception");
		}		
		catch(myException exp){
			exp.printStackTrace();
			//exp.printStackTrace();
		}
		
		
	}
}

class myException extends Exception{
	public myException(String s){
		super (s);
	}
}
