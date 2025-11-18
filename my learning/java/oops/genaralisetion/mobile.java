public class mobile{
	String model,color;
	int price;
	public mobile(String model,String color,int price){
		this.model=model;
		this.color=color;
		this.price=price;
	}
	public String toString(){
		return this.model+" "+this.color+" "+this.price;
	}
}


class samsunge extends mobile{
	samsunge(String model,String color,int price){
		super(model,color,price);
	}
}


class apple extends mobile{
	apple(String model,String color,int price){
		super(model,color,price);
	}
}


class all_details{
	public static void main(String [] arge){
		samsunge s1=new samsunge("sam21","black",14000);
		samsunge s2=new samsunge("samy24","white",24999);
		apple a1=new apple("apple max pro 15","white",100000);
		apple a2=new apple("apple 14 pro","cilver",80000);
		
		mobile [] alldata ={s1,s2,a1,a2};
		
		for (int i=0; i<alldata.length;i++){
			System.out.println("\n"+alldata[i]);
		}
	
	
	}
}


