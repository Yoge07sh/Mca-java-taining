//sum of all element in stack
import java.util.*;
class SumStack {
    public void doSum() {
        Stack st = new Stack();
        st.push(56);
        st.push(34);
        st.push(12);
        st.push(58);
        st.push(3);
        st.push(9);
        System.out.println(st);
        int sum = 0;
        for(int i=0; i<st.size(); i++) {
            int element = (int)st.get(i);
            if(element%2==0) {
            sum = sum + element;
            }
    }
    System.out.println("sum = "+ sum);
}
}
public class SumOfAll
{
	public static void main(String[] args) {
		SumStack p = new SumStack();
		p.doSum();
	}
}
