#include <stdio.h>
int main()
{
    printf("Pattern 30 :-");
    printf("\n");
    printf("Enter your number here :\n");

    int n;
    scanf("%d",&n);

    for (int i = 1; i <= n; i++)
    {
        for (int s = 0; s < n - i; s++)
            printf(" ");
        for (int j = 0; j < i; j++)
            printf("%c", 'A' + j);
        for (int j = i - 2; j >= 0; j--)
            printf("%c", 'A' + j);
        printf("\n");
    }
    for (int i = n - 2; i >= 0; i--)
    {
        for (int s = 0; s < n - i - 1; s++)
            printf(" ");
        for (int j = 0; j <= i; j++)
            printf("%c", 'A' + j);
        for (int j = i - 1; j >= 0; j--)
            printf("%c", 'A' + j);
        printf("\n");
    }

    return 0;
}