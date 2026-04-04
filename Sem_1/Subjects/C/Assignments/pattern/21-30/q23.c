#include <stdio.h>

int main()
{
    printf("Pattern 23 :-");
    printf("\n");
    printf("Enter your number here : \n");

    int n;
    scanf("%d",&n);
    
    for(int i=1; i<=n; i++)
    {
        int count=1;
        for(int j=1; j<=n; j++)
        {
            if(i<=j)
            {
                printf("%c",'A'+(count++)-1);
                
            }else
            {
                printf(" ");
            }
        }
        printf("\n");
    }

    return 0;
}