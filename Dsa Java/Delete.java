// Delete from any place
import java.util.*;
class MyStack {
    public void doDelete() {
        Stack st = new Stack();
        st.push(7);
        st.push(8);
        st.push(9);
        st.push(10);
        st.push(11);
        st.push(12);
        st.push(41);
        System.out.println(st);
        //[7,8,9,10,11,12,41]
        int [] ar = new int[2]; // since we need to delete 3rd element 
        for(int i=0; i<2; i++) {
            int top = (int)st.peek();
            ar[i]=top;
            st.pop(); 
        }
        System.out.println(st);
        st.pop();
        for(int i=1; i>=0; i--) {
            st.push(ar[i]);
        }
        System.out.println(st);
}
}
public class Delete
{
	public static void main(String[] args) {
		MyStack p = new MyStack();
		p.doDelete();
	}
}