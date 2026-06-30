//reverse a string using stack
import java.util.*;

public class ReverseString {
    public static void main(String[] args) {
        Stack st = new Stack();
        Scanner sc=new Scanner(System.in);
        
        System.out.println("enter the string");
        String s=sc.nextLine();
        for(int i=0;i<s.length();i++)
        {
            st.push(s.charAt(i));
        }
        while (!st.empty()) {
            System.out.print(st.pop());
        }

    }
}
