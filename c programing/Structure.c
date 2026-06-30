#include<stdio.h>
struct employeee
{
    char name[20][5];
    int age[5];

}p;
void main() {
    int i;
    for(i=0;i<5;i++) {
        gets(p.name[i]);
        scanf("%d",&p.age[i]);
    }
     for(i=0;i<5;i++) {
        printf("%s",p.name[i]);
        printf("%d",p.age[i]);
    }
}
