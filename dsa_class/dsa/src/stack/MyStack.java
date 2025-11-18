package stack;
import java.util.Scanner;
public class MyStack {
	
	private static int StackArr[];
	static int top=-1;
	
	
	public static void CreateStack(int size) {
		StackArr=new int[size];
		System.out.println("stack had been created size : "+size);
	}
	
	public static void main(String[] args) {	
		System.out.println("Enter stack size : ");
		Scanner sc=new Scanner(System.in);
		CreateStack(sc.nextInt());
		sc.close();
		push(12);		
		push(13);		
		push(14);		
		push(15);
		
	}
	public static void push(int ele) {
//		System.out.println(top);
		if(top>=StackArr.length-1) {
			System.out.println("stack is full so you cant push : "+ele);
		}else
		{
			StackArr[++top]=ele;
			System.out.println(StackArr.length+"--"+top+"--"+ele+" had been added");
		}
		
	}

//	public static int[] getStackArr() {
//		return StackArr;
//	}
//
//	public static void setStackArr(int stackArr[]) {
//		StackArr = stackArr;
//	}
}
 