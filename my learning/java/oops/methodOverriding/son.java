public class son extends dad{
	
	String girlfiend="kajal";
	@Override
	//this is the overrid in java 
	protected void outing(){
		System.out.println(" son outing with "+girlfiend);
	}
	
	// is different 
	void outing(String girlfiend){
		System.out.println(" loganathan outing with "+girlfiend);
	}
	public static void main(String [] arge){
		son d1=new son();
		d1.learn();
		d1.outing("pappa");
		
		System.out.println("i have got "+d1.mony+" from my dad bage");
		
		
	}
}
