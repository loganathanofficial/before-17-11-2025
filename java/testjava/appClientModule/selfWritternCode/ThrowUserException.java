package selfWritternCode;

public class ThrowUserException extends Exception {
	private static final long serialVersionUID = 1L;
	@Override
	public String getMessage() {
		return "user loganathan sended the exception";
	}
	String EDara=new String("user defined exception");// this date i am not used 
}
