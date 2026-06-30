//greatest element 
import java.util.*;
class GreatestElement {
    public void doFind() {
        Stack st = new Stack();
        st.push(56);
        st.push(34);
        st.push(12);
        st.push(58);
        st.push(32);
        st.push(9);
        System.out.println(st);
        int max= (int)st.get(0); // max = 56
        for(int i = 1; i<st.size(); i++) {
            int element = (int)st.get(i);
            if(element>max) {
               max=element; // when i=3, max=58
            }
        }
        System.out.println(max + "max");
    }
}

public class GreatestElementMain
{
	public static void main(String[] args) {
		GreatestElement p= new GreatestElement();
		p.doFind();
		
	}
}
