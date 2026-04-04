#include <stdio.h>
int main()
{
        printf("Pattern 50 :-");
        printf("\n");
        printf("Enter your number here : \n");
        
        int n;
        scanf("%d",&n);
        int count=n*(n+1)/2;
        for (int i=1; i<=n; i++) 
        {   
            for(int j=1; j<=i; j++)
            {
                printf("%d ",count--);
                
            } 
            printf("\n");
        }
        
    return 0;
}