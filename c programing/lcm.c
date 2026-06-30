#include<stdio.h>
void main() {
    int a,b,lcm,l=0,s=0,p=1;
    printf("enter the numbers to find lcm");
    scanf("%d%d",&a,&b);
     if(a>b) {
        l =a;
        s=b;
     } else {
        l=b;
        s=a;
     }
     if(l%s==0) {
        lcm = l;
     } else {
        p=a*b;
        for(int i=l+1;i<=p;i++) {
            if(i%a==0 && i%b==0) {
                lcm = i;
                break;
            }
        }
     }
     printf("lcm is %d",lcm);
}