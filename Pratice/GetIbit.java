import java.util.Scanner;

public class GetIbit {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println("enter the bit you want");
        int i = sc.nextInt();
        int bit = (n >> i) & 1;
        System.out.println(bit);
    }
}
