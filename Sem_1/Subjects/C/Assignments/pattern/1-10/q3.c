#include <stdio.h>
int main()
{
        printf("Pattern 3 :-");
        printf("\n");
        printf("Enter your number here : \n");
        
        int n;
        scanf("%d",&n);
        for(int i=1; i<=n; i++)
        {
            printf("%c ",'A'+i-1);
        }
    
    return 0;
}