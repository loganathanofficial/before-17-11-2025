package selfWritternCode;
public class TestUserException {
	public static void main(String[] arg) {
		System.out.println("user trying to send a exception");
		String exceptionOutput = handleException();
		System.out.println(exceptionOutput);
		
		try {
			userUseThrows();
		}catch(ThrowUserException e) {
			System.out.println("user has succesfully handled the exception");
		}
	}
	private static String userUseThrows() throws ThrowUserException{
		throw new ThrowUserException();
	}
	private static String handleException() {
		try {
			throw new ThrowUserException();
		}catch(ThrowUserException e) {
		//e.printStackTrace()
			return "user throw exception is succesfully working as we expected";
		}finally {
			return "i am finally block i had overridden the catch block return statement " ;
		}
	}
}
