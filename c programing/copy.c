#include <stdio.h>
void main()
{
    char x;
    FILE *fp, *ft;
    fp = fopen("b.txt", "r");
    ft = fopen("a.txt", "w");
    while ((x = fgetc(fp)) != EOF)
    {
        fputc(x, ft);
    }
    //  fscanf(ft);
    fclose(fp);
    fclose(ft);
}