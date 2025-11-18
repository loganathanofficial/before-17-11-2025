public class perfectnumber {
    public static void main(String[] args) {
        int num = 7; 
        int sum = 0;

        // Iterate from 1 to num/2 to find all proper divisors
        for (int i = 1; i <= num / 2; i++) {
            if (num % i == 0) {
                sum += i; // Add the divisor to sum
            }
        }

        // Check if sum of divisors equals the number itself
        if (sum == num) {
            System.out.println(num + " is a perfect number");
        } else {
            System.out.println(num + " is not a perfect number");
        }
    }
}
