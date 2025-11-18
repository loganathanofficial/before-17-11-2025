public class leapyear {
        public static void main(String[] args) {
            int year=2021;
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
                System.err.println(year+"is leap year");
            }
            else{
                System.err.println(year+"is not a leap year");
        }
    }
}
