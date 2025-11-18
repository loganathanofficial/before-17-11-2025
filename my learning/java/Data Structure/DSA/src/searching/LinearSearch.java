package searching;
import java.util.Scanner;
public class LinearSearch {

	public static void main(String[] args) {
		int [] arr= {0,2,3,4,5,6,7,8,9};
		Scanner sc=new Scanner(System.in);
		System.out.print("enter search element : ");
		int search=sc.nextInt();
		int i=0;
		
		for(i=0;i<arr.length;i++) {
			if(arr[i]==search) {
				System.out.println("the "+search+" accured at the index of "+i);
				break;
			}
		}
		if(i==arr.length) {
			System.out.println("you are trying to search "+search+" but ther is no such element in out data");

		}
	}

}
