package balancedAndUnbalanced;

public class balancedAndUnbalanced {
	
	static char[] stack;
	static int top=-1;
	
	static void push() {
		top++;
		stack[top]='(';
	}
	static void pop() {
		top--;
	}
	public static void main(String[] args) {
		String s="(())";
		stack=new char[s.length()];
		boolean flag=true;
		
		for(int i=0;i<s.length();i++) {
			if(s.charAt(i)=='(') {
				push();
			}else if(top!=-1) {
				pop();
			}else {
				flag=false;
				break;
			}
			
		}
		if(top==-1&&flag==true) {
			System.out.println("balancede");
		}else {
			System.out.println("unbalanced");
		}
	}
}
