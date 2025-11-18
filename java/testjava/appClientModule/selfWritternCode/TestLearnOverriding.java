package selfWritternCode;
import java.util.Scanner;
public class TestLearnOverriding extends LearnOverriding {
	String BoyMind;
	TestLearnOverriding(String BoyMind){
		this.BoyMind=BoyMind;
	}
	@Override
	public String girlMind(String BoyMind) {
		if(!BoyMind.isEmpty()) {
			return "i like you so much(~_~)";
		}else {
			return "The boy not even talking with me";
		}
	}
	private String Result() {
		return girlMind(BoyMind);
	}
	
	public static void main(String arg[]) {
		System.out.println("i am testing the methor overriding program \n Send a message to your girl :");
		Scanner sc=new Scanner(System.in);
		TestLearnOverriding Lover = new TestLearnOverriding(sc.next());
		System.out.println(Lover.Result());
	}
	
}
