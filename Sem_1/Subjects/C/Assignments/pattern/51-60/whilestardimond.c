#include <stdio.h>

int main()
{
    int n;
    scanf("%d",&n);
    int i=1;
    while(i<=n-1){
        int j=1;
        while(j<=n-i){
            printf(" ");
            j++;
        }
        int k=1;
        while(k<=i*2-1){
            printf("*");
            k++;
        }
        
        printf("\n");
        i++;
    }
    
    while(i>=1){
        int j=1;
        while(j<=n-i){
            printf(" ");
            j++;
        }
        int k=1;
        while(k<=i*2-1){
            printf("*");
            k++;
        }
        
        printf("\n");
        i--;
    }

    return 0;
}
