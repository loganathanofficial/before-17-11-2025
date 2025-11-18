package DSA_Class;

import java.util.TreeMap;

public class sum_of_repeated_number {
	public static void main(String[] args) {
		Integer arr[]= {1,1,1,2,3,3,4,5,5,6,7,8,8,9};
		TreeMap<Integer,Integer> map=new TreeMap<Integer,Integer>();
		for(int i=0;i<arr.length;i++) {
			if(map.containsKey(arr[i])) {
				map.put(arr[i], map.get(arr[i])+1);
			}else {
				map.put(arr[i], 1);

			}
		}
		map.containsValue(map)i
		
		System.out.println(map);		System.out.println(map.keySet());
		System.out.println(map.values());
		Integer sum=0;
		for(Integer key:map.keySet()) {
			if(map.get(key)>1) {
				sum+=key;
				
			}
		}
		System.out.println(sum);
		
		
	}

}
