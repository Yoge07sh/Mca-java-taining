import java.util.*;
class ValidParanthesis {
    public void doCheck() {
        Stack st = new Stack();
        String s = "()";
        int flag =0;
        for(int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if(ch == '(' || ch == '{' || ch == '[') {
                st.push(ch);
            }else {
                char top = (char)st.peek();
                    if(ch == ']') {
                        if(top!='[') {
                            flag=1;
                            break;
                        }
                    }
                    if(ch == '}') {
                        if(top!='{') {
                            flag=1;
                            break;
                        }
                    }
                    if(ch == ')') {
                        if(top!='(') {
                            flag=1;
                            break;
                        }
                    }
                    st.pop();
                }
         }
        
        if(flag==0 && st.isEmpty()) {
            System.out.println("valid");
        }else {
            System.out.println("invalid");
        } 
            
        }
    }

public class MainV
{
	public static void main(String[] args) {
		ValidParanthesis p = new ValidParanthesis();
		p.doCheck();
	}
}