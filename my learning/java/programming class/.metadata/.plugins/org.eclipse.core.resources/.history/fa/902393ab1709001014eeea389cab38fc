package pro;
import java.util.Scanner;
public class PalindromOrNot {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter a String to perform operation : ");
		String EnteredValue=sc.nextLine();
		sc.close();
		if(isPalindrom(EnteredValue)) {
			System.out.println("you  are entered value "+EnteredValue+" is palindrom");
		}else {
			System.out.println("you  are entered value :-"+EnteredValue+"-: is not palindrom");
		}
	}
	private static boolean isPalindrom(String EnteredValue) {
		String reversed="";
		for(int i=0;i<EnteredValue.length();i++) {
			reversed = EnteredValue.charAt(i)+reversed;
		}
		return EnteredValue.equalsIgnoreCase(reversed);
		
	}
}
