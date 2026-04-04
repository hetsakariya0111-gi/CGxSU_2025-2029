#include <stdio.h>
int main()
{
        printf("Pattern 5 :-");
        printf("\n");
        printf("Enter your number here : \n");
        
        int n;
        scanf("%d",&n);
        for(int i=1; i<=n; i++)
        {
            for(int j=1; j<=n; j++)
            {
                printf("%d ",j);
            }
            printf("\n");
        }
    
    return 0;
}