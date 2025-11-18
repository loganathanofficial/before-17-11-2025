public class distance{
	public static double total_distance(int speed,int minutes){
		double time=minutes/60;
		double total_distance=time*speed;
		return total_distance;
	}
	
	public static void main(String[] arge){
		int speed=120,minutes=360;
		double total_distance=total_distance(speed,minutes);
		System.out.println("The total distance is : "+total_distance);
	}
}
