public class Main{
	public static void main(String[] args){
		String username="admin";
		System.out.println(args[0]);
		if(username.equals(args[0])){
			System.out.println("ypur login succesfully");
		}else{
			System.out.println("enter verifyed username");
		}
	}
}
