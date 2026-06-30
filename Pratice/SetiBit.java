import java.util.Scanner;

public class SetiBit {
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println("enter the bit you want");
        int i = sc.nextInt();
       n =  n|(1<<i);
       System.out.println(n);
    }
}
