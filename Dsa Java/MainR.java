 import java.util.*;
 class RedundantStack {
     public void doCheck() {
         String s = "(a+b)";
         Stack st = new Stack();
         int flag = 0;
         for(int i=0; i<s.length(); i++) {
             char ch =s.charAt(i);
             if(ch=='(' || ch== '+' || ch== '-' || ch== '*' || ch=='/') {
                 st.push(ch); 
             } else {
                if(ch == ')') {
                    flag = 0;
                    while((char)st.peek()!='(') {
                        char top=(char)st.peek();
                        if(top=='+' || top=='-' || top=='*' || top=='/') {
                            flag = 1;
                        }
                        st.pop();
                    }
                    st.pop();
                }
            }
        } //end of loop
         System.out.print(st);  
         if(flag == 0) {
             System.out.println("Redundant");
         }
         else {
             System.out.println("Not Redundant");
         }
    }
 }
public class MainR
{
	public static void main(String[] args) {
		RedundantStack p = new RedundantStack();
		p.doCheck();
	}
}

/* 
import java.util.*;

class RedundantStack {
    public void doCheck() {
        String s = "(a+b)";
        Stack<Character> st = new Stack<>();
        int flag = 1;  // assume NOT redundant

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (ch == '(') {
                st.push(ch);
            }
            else if (ch == '+' || ch == '-' || ch == '*' || ch == '/') {
                st.push(ch);  // push operator only if inside ()
            }
            else if (ch == ')') {

                if (st.peek() == '(') {
                    flag = 0; // redundant because no operator
                }

                while (!st.isEmpty() && st.peek() != '(') {
                    st.pop();
                }
                st.pop(); // pop '('
            }
        }

        if (flag == 0) {
            System.out.println("Redundant");
        } else {
            System.out.println("Not Redundant");
        }
    }
}

public class MainR {
    public static void main(String[] args) {
        RedundantStack p = new RedundantStack();
        p.doCheck();
    }
}

*/