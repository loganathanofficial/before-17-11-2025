
// this is called explicit chining constructod
public class HWstudent{
		String name,qualification;
		int year_of_passed_out;
		double percentage;
		public HWstudent(String name,String qualification,int year_of_passed_out,double percentage){
				this.name=name;this.qualification=qualification;this.year_of_passed_out=year_of_passed_out;this.percentage=percentage;
		}
		
		
		
		void get(String verify,HWstudent[] alldata){
			
			if("data"!=verify){
				System.out.println("\nyou don't have right's to get to know the data !.....🤣️");
			}
			if("data"==verify){
				for(int i=0;i<alldata.length;i++){
						System.out.println();
					if(alldata[i].percentage<60){
						System.out.println("The Student is <60%");
						System.out.println("--------------------");
						System.out.println("Name              :"+alldata[i].name+"\nQualification     :"+alldata[i].qualification+"\nYear Of Passed Out:"+alldata[i].year_of_passed_out+"\nPercentage        :"+alldata[i].percentage);
					}
				}
				
				
					/*if(){
					        //2
					}
					if(){
					        //3
					}
					if(){
						//4
					}
					for(int i=0;i<alldata.length;i++){
						if(alldata[i].year_of_passed_out<=2021 and alldata[i].year_of_passed_out>=2024){//5
					
						}
					}*/
					
				
				
			}
			
		}
	public static void main(String [] arge){
		
		HWstudent s1=new HWstudent("loganathan","BE-CSE",2025,90);
		HWstudent s2=new HWstudent("logu","BE-CSE",2024,100);
		HWstudent s3=new HWstudent("dhanush","BE-CSE",2023,50);
		HWstudent s4=new HWstudent("mahesh","BE-CSE",2024,59);
		HWstudent[] alldata={s1,s2,s3,s4};
		s2.get("data",alldata);
	}
}
