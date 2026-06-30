#include <stdio.h>
void main()
{
    int a[5] = {1, 4, 5, 6, 7};
    int l = a[0], sl = 0, i;
    for (i = 0; i < 5; i++)
    {
        if (l < a[i])
        {
            sl = l;
            l = a[i];
        }
        else if (sl < a[i] && a[i] != l)
        {
            sl = a[i];
        }
    }
    if (a[i] > sl && a[i] != l)
    {
        sl = a[i];
    }

    printf("%d", sl);
}