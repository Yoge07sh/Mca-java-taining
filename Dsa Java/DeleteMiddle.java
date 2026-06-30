import java.util.*;
class DeleteFromMiddle{
    public void doDelete(){
        Stack st =new Stack();
        st.push(12);
        st.push(78);
        st.push(11);
        st.push(45);
        st.push(18);
        st.push(10);
        st.push(17);
        System.out.println(st);
       int mid=st.size()/2;
       System.out.println("mid "+mid);
       int [] ar=new int[mid];
       int j=0;
       for(int i=1; i<=mid; i++)
       {int top =(int) st.peek();
           ar[j]=top;
           j++;
           st.pop();
       }
        st.pop(); //it will delete the middle element
        for(int i=j-1;i>=0;i--)
        {
            st.push(ar[i]);
        }
        System.out.println(st);
       
    }
    
}

public class DeleteMiddle
{
	public static void main(String[] args) {
		DeleteFromMiddle p= new DeleteFromMiddle();
		p.doDelete();
		
	}
}