#include <stdio.h>
int main()
{
    printf("Pattern 27 :-");
    printf("\n");
    printf("Enter your number here : \n");

    int n;
    scanf("%d",&n);
    for(int i=n; i>=1; i--)
    {
        for(int j=1; j<=n-i; j++)
        {
            printf(" ");
        }
        for(int j=1; j<=2*i-1; j++)
        {
            printf("%d",j);
        }
        printf("\n");
    }

    return 0;
}