#include <stdio.h>
int main()
{
    printf("Pattern 19 :-");
    printf("\n");
    printf("Enter your number here : \n");

    int n;
    scanf("%d",&n);

    int count=1;

    for(int i=1; i<=n; i++)
    {
        for(int j=1; j<=i; j++)
        {
            printf("%d ",count++);
        }
        printf("\n");
    }
    
    return 0;
}