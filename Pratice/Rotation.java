import java.util.Scanner;

class Rotate {
    public void doRotate() {
        int n = 12345;
        Scanner sc = new Scanner(System.in);
        int digit = 0;
        int rot = n;
        while (n != 0) {
            n = n / 10;
            digit++;
        }
        System.out.println(digit);
        System.out.println("enter how many time you rotate");
        int t = sc.nextInt();
        t = t % digit;
        int place = (int) Math.pow(10, digit - 1);
        // for right rotaion
        for (int i = 0; i < t; i++) {
            int r = rot % 10;
            rot = rot / 10;
            rot = r * place + rot;
        }

        // for left rotation
        /*
         * for (int i = 0; i < t; i++) {
         * int r = rot % place;
         * rot = rot / place;
         * rot = r * 10 + rot;
         * }
         */
        System.out.println(rot);
    }
}

public class Rotation {
    public static void main(String[] args) {
        Rotate p = new Rotate();
        p.doRotate();
    }
}
