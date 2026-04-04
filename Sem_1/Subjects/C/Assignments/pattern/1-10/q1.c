#include <stdio.h>
int main()
{
        printf("Pattern 1 :-");
        printf("\n");
        printf("Enter your number here : \n");
        
        int n;
        scanf("%d",&n);
        for (int i = 1; i<=n; i++) {
            printf("*"); 
        }
        printf("\n");
    
    return 0;
}