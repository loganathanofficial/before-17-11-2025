public class decrement{
    public static void main(String[] args) {
        int x=10;
        int y= x+ ++x + --x;
        int z=x+ ++y;
        int m=x+ --y + z--;
        System.out.println(x+y+z+m);
        System.out.println(x+""+y+""+z+""+m--);

    }
}
