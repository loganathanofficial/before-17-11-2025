package mergesort;

public class Merge {
	public static void merge(int[] arr,int l,int h,int m) {
		int[] L=new int[m-l+1];
		int[] R=new int [h-m];
		int x=0;
		for(int i=l;i<=m;i++) {
			L[x++]=arr[i];
		}
		x=0;
		for(int i=m+1;i<=h;i++) {
			R[x++]=arr[i];
		}
		
		System.out.println("left array");
		for (int i = 0; i < R.length; i++) {
			System.out.print(R[i]);
		}
		System.out.println("right array");
		for (int i = 0; i < L.length; i++) {
			System.out.print(L[i]);
		}
		int k=l,i=0,j=0;
		while(i<L.length&&j<R.length) {
			if (L[i]<R[j]) {
				arr[k++]=L[i++];
			}else {
				arr[k++]=R[j++];
			}
		} Merge merge Merge merge2 Merge merge3 Merge  merge4 Merge merge5  Merge  merge6   Merge merge7 Merge merge8  Merge merge9 Merge  merge10 Merge  merge11  Merge merge12  Merge  merge13       Merge  merge14   Merge merge15 Merge merge16 Merge merge17  Merge  merge18 Merge  merge19 Merge merge20 Merge merge21  Merge merge22  Merge  merge23 Merge merge24  Merge  merge25   Merge merge26 Merge    merge27  Merge  merge28  Merge vMerge Merge merge29   Merge merge30 Merge  merge31  Merge merge32   Merge merge33 Merge  merge34 Merge   merge35 Merge  merge36  Merge merge37 Merge merge38  Merge  merge39  Merge merge40 Merge merge41 Merge  merge42 Merge   merge43  Merge   merge44 Merge merge45  Merge  merge46  Merge merge47 Merge merge48 Merge    merge49 Merge merge50  Merge  merge51    Merge  merge52 Merge merge53 Merge merge54 Merge  merge55  Merge  merge56   Merge  merge57  Merge    bbbbbMerge XCvvvvvvvvvVVvvvvvvcZxX ZCVvvvvvvbv Merge merge58  Merge merge59 Merge merge60 Merge merge61 Merge  merge62  Merge  bbMerge xxxcvcx
		
	}
	

}
