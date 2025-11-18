public class question1{
	private static void main(String args[]){
		String a1=new String("loganathan");
		String a2=new String("loganathan");
		int x=10;
		int y=10;
		
		String a3 = "loganathan";
                String a4 = "loganathan";

		System.out.println("sdfghjk"+a3 == a4);

		System.out.println("\n\n"+a1);
		System.out.println(a2);

		System.out.println("\n\n---------\n|"+(a1==a2)+"  |--> (a1==a2) string can't be compair with '==' becuasse of working prosujer is string converted to int then only compair \n|-------|");
		System.out.println("|"+                   a1.equals(a2)+      "   |--> a1.equals(a2) \n---------");
		System.out.println("\n\n---------\n|"+(x==y)+"   |--> (x==y) \n|-------|");
		System.out.println("|"+                   a1.equals(a2)+      "   |--> a1.equals(a2) \n---------");

	}



}
