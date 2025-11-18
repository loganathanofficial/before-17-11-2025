public class productofdigits {
    public static void main(String[] args) {
            int num =263; 
            int product = 1;
             while (num != 0) 
             {
                product=product*(num%10);         
                num =num/10;             
            }
    
            System.out.println(product);
        }
    }
