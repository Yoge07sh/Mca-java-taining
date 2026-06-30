#include <stdio.h>
void main()
{
    int a[100], v, pos = 0, n;
    printf("enter the size of array");
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
    printf("enter the value and pos to insert");
    scanf("%d%d",&v,&pos);
    for(int i=n-1;i>=pos-1;i--) {
        a[i+1] = a[i];
    }
    a[pos-1] = v;
    n++;
      for (int i = 0; i < n; i++)
    {
        printf("%d",a[i]);
    }
    
}