#include <stdio.h>
int main()
{
    printf("Pattern 24 :-");
    printf("\n");
    printf("Enter your number here : \n");

    int n;
    scanf("%d",&n);
    
    for(int i=1; i<=n; i++)
    {
        int count=1;
        for(int j=1; j<=2*i-1; j++)
        {
            if(j<=i)
            {
                count++;
                printf("%d ",count-1);
            }   
            else{
            count--;
            printf("%d ",count-1);
            }
        }
        printf("\n");
    }

    return 0;
}