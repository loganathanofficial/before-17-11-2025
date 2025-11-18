public class increment{
    public static void main(String[] args) {
        int a=12;
        int b= ++a +a++;
        int c=a+ ++b + b++ +a++ ;
        int sum=a+b+c;
        System.out.println(sum++);
        System.err.println(++a);
        System.out.println(b++);
        System.err.println(c);
   
    }
}
