#include <stdio.h>
int main()
{
        printf("Pattern 9 :-");
        printf("\n");
        printf("Enter your number here : \n");
        
        int n;
        scanf("%d",&n);
        for(int i=1; i<=n; i++)
        {
            for(int j=1; j<=i; j++)
            {
                printf("%c ",'A'+j-1);
            }
            printf("\n");
        }
    
    return 0;
}