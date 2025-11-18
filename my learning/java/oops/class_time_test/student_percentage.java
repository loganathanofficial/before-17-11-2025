public class student_percentage{
	public static double percentage(int subjArr[]){
		int total_marks=0;
		for(int i=0;i<subjArr.length;i++){
			total_marks+=subjArr[i];	
			
		}
		double total_percentage=total_marks/subjArr.length;
		return total_percentage;
	}
	
	public static void main(String[] arge){
		int subjArr[]={70,80,100,100,70,100};
		int total_marks=0;
		for(int i=0;i<subjArr.length;i++){
			total_marks+=subjArr[i];
			System.out.println(total_marks);	
			
		}
		double total_percentage=percentage(subjArr);
		System.out.println("Total percentage is : "+total_percentage);
	}	
}
