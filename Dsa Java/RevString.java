import java.util.*;

public class RevString {

    static class MyStack {
        public void RevString() {
            Scanner sc = new Scanner(System.in);
            Stack st = new Stack();
            System.out.println("enter the string");
            String str = sc.nextLine();
            for (int i = 0; i < str.length(); i++) {

                st.push(str.charAt(i));

            }
            while (!st.empty()) {
                System.out.print(st.peek());
                st.pop();
            }

        }
    }

    public static void main(String[] args) {
        MyStack p = new MyStack();
        p.RevString();
    }
}
