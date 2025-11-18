package toString;
public class foroverrid{
	final private int value;
	public foroverrid(){
		this.value=10;
	}
	@Override
	public int hashCode(){
		return 12345;
	}
	@Override
	public String toString(){
		return "foroverrid@"+hashCode();
	}
	
	
}
