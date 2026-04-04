#include <stdio.h>

int main()
{
    printf("Pattern 54 :-");
    printf("\n");
    printf("Enter your number here : \n");
        
    int n;
    scanf("%d",&n);
    
    for(int i=1; i<=2*n-1; i++)
    {
        int count=0;
        for(int j=1; j<=2*n-1; j++)
        {
            if(i+j>=n+1 && i-j<=n-1 && j-i<=n-1 && i+j<=3*n-1)
            {
                if(j<=n)
                {
                    ++count;
                    printf("%d",count);
                }
                else
                {
                    printf("%d",--count);
                }
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }

    return 0;
}