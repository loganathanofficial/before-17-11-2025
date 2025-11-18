public class son implements father,mother{
	@Override
		public void care(){
		System.out.println("father and mother care .."+this.mother+this.father);		
	}
	public static void main(String [] arge){
		son s1=new son();
		s1.care();
	}
}
