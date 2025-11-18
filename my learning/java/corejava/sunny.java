public class sunny{
    public static void main(String[] args) {
        int num =3;
        int num2 =num*num;
        if (num!=num2) {
            num2-=1;
            System.out.println(num2 + " is a sunny number");
        } else {
            System.out.println(num2 + " is not a sunny number");
        }
    }
}
