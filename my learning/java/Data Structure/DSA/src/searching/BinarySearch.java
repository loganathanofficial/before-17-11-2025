package searching;

import java.util.Scanner;
import java.util.Arrays;
public class BinarySearch {
	public static void main(String[] arge) {
		int[] arr = { 12,23,45,67,89,123,456,789,1234,5678,9123};
		System.out.print("this is array data \n-----------------------\n"+Arrays.toString(arr)+"\n------------------------\nEnter a number if you need to know the index : ");
		Scanner sc=new Scanner(System.in);
		int key = sc.nextInt();
		int index = FindIndex(arr, key);
		if(index==-1) {
			System.out.println("-----------------------------------------------------");
			System.err.println("your trying to search "+key+" is not in our array data");
		}else {
			System.out.println("your searching "+key+" is present at the index of "+index);
		}
	

	}

	static int FindIndex(int arr[], int key) {
		int low = 0, high = arr.length;	
		int mid = high / 2;

		while (true) {
			System.out.println("\nlow : "+low);
			System.out.println("mid : "+mid);
			System.out.println("high :"+high);
			if (mid>=0 && mid<=arr.length) {
				if (arr[mid] == key) {
					return mid;
				}else if(mid==low||mid==high) {
					return -1;
					
				}else if (key<arr[mid]) {
					high = mid;
				} else if (key>arr[mid]) {
					low = mid;
				}
				mid = (low + high) / 2;

			}
			else {
				return -1;
			}
		}
		

	}

}
