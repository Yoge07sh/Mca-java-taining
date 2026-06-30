
import java.util.*;
class InsertAtBottom
{
    public void doInsertAtBottom()
    {
        Stack st=new Stack();
        st.push(67);
        st.push(44);
        st.push(11);
        st.push(56);
        st.push(11);
        System.out.println(st);
        int []ar =new int[st.size()];
        int j=0;
        while(!st.empty())
        {
           int top =(int)st.peek();
           ar[j]=top;
           j++;
           st.pop();
        }
        System.out.println(st);
       st.push(100);
        for(int i=j-1;i>=0;i--)
        {
            st.push(ar[i]);
        }
        System.out.println(st);
    }
}
public class Insert
{
	public static void main(String[] args) {
	    InsertAtBottom p=new InsertAtBottom();
	    p.doInsertAtBottom();
	
	}
}