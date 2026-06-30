import java.util.*;
class InsertAt {
    public void doInsert() {
        Stack st = new Stack();
        st.push(12);
        st.push(13);
        st.push(15);
        st.push(16);
        st.push(17);
        System.out.println(st);
        int []a = new int[3];
        for(int i=0;i<3;i++)
        {
            int top = (int)st.peek();
            a[i] = top;
            st.pop();
        }
        System.out.println(st);
        st.push(10);
        for(int i=2; i>=0; i--)
        {
            st.push(a[i]);
        }
        System.out.println(st);
    }
}

public class InsertAny {
    public static void main(String[] args) {
        InsertAt p = new InsertAt();
        p.doInsert();
    }
}
