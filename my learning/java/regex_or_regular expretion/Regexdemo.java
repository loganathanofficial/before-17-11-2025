import java.util.regex.*;
public class Regexdemo{
	public static void main(String args[]){
		//is a pre defined api for string ''pattern matching" and string validation 
		String regex="A.*";
		String str="AApple";
		System.out.println(Pattern.matches(regex,str));
		System.out.println(Pattern.matches("A.+",str));

			
	}



}
