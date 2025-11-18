package testjava;

public class Testincrementer {
	public static void main(String arg[]) {
		int x = 0;
		x = --x;
		x = x---++x + x;
		System.out.println(x);
	}
}
