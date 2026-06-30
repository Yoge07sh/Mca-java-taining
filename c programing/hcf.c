#include <stdio.h>
void main()
{
    int hcf=0, a, b, l = 0, s = 0;
    printf("enter the numers ");
    scanf("%d%d", &a, &b);
    if (a > b)
    {
        l = a;
        s = b;
    }
    else
    {
        l = b;
        s = a;
    }
    if (l % s == 0)
    {
        hcf = s;
    }
    else
    {
        for (int i = 1; i <= s; i++)
        {
            if (a % i == 0 && b % i == 0)
            {
                hcf = i;
            }
        }
    }
    printf("%d", hcf);
}