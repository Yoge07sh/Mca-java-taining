#include <stdio.h>
void main()
{
    int n;
    printf("enter a number");
    scanf("%d", &n);
    if ((n & 1) == 0)
    {
        printf("even");
    }
    else
    {
        printf("odd");
    }
}