package tree;
import java.util.Scanner;
public class tree {
	
	static{
	System.out.println("enter stack limite :");
	}
	static Scanner sc=new Scanner(System.in);
	static int length=sc.nextInt();
	static int top=-1;
	
//	@SuppressWarnings("removal")
	static Integer stack= new Integer(length);
	
	static String push(Integer elemente) {
		top+=1;
		stack[top]=elemente;
		return "elemente added";
		
		
	}
	

	public static void main(String[] args) {
		
//		System.out.println(l);
		while(true) {
			System.out.println("1.push\n2.pop\n3.display\n4.peek\n5.clear\n6.peek\n7.cleare\n8.isEmpty\n9.isFull");
			System.out.println("enter your choice :");
			int choice=sc.nextInt();
			switch(choice) {
			case 1:
				System.out.println("enter the elemente to add : ");
				int elemente=sc.nextInt();
				push(elemente);
				
			}
		}
		
		
		
		
	}

}
