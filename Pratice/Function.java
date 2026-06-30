
// reverse string using two pointers and array
// check armstrong
// remove space from string
//leap
// count frequency of each charachter and print highest
import java.util.*;

class Methods {
    public void doRev() {
        String a = "yogesh";
        char rev[] = a.toCharArray();
        int s = 0;
        int l = a.length() - 1;
        while (s < l) {
            char temp = rev[s];
            rev[s] = rev[l];
            rev[l] = temp;
            s++;
            l--;
        }
        System.out.println("string after reverse" + "  " + new String(rev));
    }

    public void checkArmstrom() {
        int n = 153;
        int o = n;
        int sum = 0;
        int count = 0;
        while (n != 0) {
            n = n / 10;
            count++;
        }
        int m = o;
        while (o != 0) {
            int rem = o % 10;
            int p = (int) Math.pow(rem, count);
            sum = sum + p;
            o = o / 10;
        }
        if (sum == m) {
            System.out.println("number is armstrom");
        } else {
            System.out.println("number is not armstrom");
        }
    }

    public void removeSPace() {
        String a = "i love my india";
        String b = "";
        for (int i = 0; i < a.length(); i++) {
            if (a.charAt(i) != ' ') {
                b = b + a.charAt(i);
            }
        }
        System.out.println(b);
    }

    public void chekLeap() {
        int year = 2016;
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
            System.out.println("leap");
        } else {
            System.out.println("not leap");
        }
    }

    public void doCount() {
        String s = "Hello how are you";
        s = s.toLowerCase();
        char ch[] = s.toCharArray();
        int freq[] = new int[26];
        for (int i = 0; i < ch.length; i++) {
            if ((ch[i] >= 97 && ch[i] <= 122)) {
                freq[ch[i] - 'a']++;
            }
        }
        int l = freq[0], pos = 0;
        for (int i = 0; i < 26; i++) {
            if (freq[i] > 0) {
                System.out.println((char) (i + 'a') + "=" + " " + freq[i]);
            }
            if (l < freq[i]) {
                l = freq[i];
                pos = i;
            }
        }
        System.out.println("highest freq is " + (char) (pos + 'a') + " " + l);
    }

}

public class Function {
    public static void main(String[] args) {
        Methods y = new Methods();
        // y.doRev();
        // y.checkArmstrom();
        // y.removeSPace();
        // y.chekLeap();
        // y.doCount();
    }
}
