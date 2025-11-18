public class DigitPowerSum {
    public static void main(String[] args) {
        int num = 121;
        int sum = 0;
        String numlen = String.valueOf(num);
        int count = numlen.length();


        while (num > 0) {
            int digit = num % 10;
            sum =sum+(int) Math.pow(digit, count);
            num =num/10;
        }

        System.out.println("Sum: " + sum);
    }
}
