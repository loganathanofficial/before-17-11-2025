public class super_market_discount {
	public static double b_discount (int product[]){
		double total_product=0;
		for (int i=0;i<product.length;i++){
			total_product+=product[i];
			
		}
		return total_product;
	
	}
	public static double a_discount (int discount,int[] product){
			double totalproduct=b_discount(product);
			double a_discount=(totalproduct/100)*discount;
			double t_discount=totalproduct-a_discount;
			System.out.print("After discount : "+t_discount);
			System.out.println(discount);
			return a_discount;
	}
	
	public static void main(String[] arge){
		int discount=20;
		int product[]={20,37,9000,354,444};
		b_discount(product);
		System.out.println("befour discount : "+b_discount(product));
		System.out.println("discount amount : "+a_discount(discount,product));
			
	}		
}
