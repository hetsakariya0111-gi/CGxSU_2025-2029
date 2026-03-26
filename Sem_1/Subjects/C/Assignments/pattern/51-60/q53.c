# include<stdio.h>
int main()
{
    printf("Pattern 53 :- ");
    printf("\n");
    printf("Enter your number here : \n");

    int n;
    scanf("%d",&n);

    int k=1;
    for(int i=1; i<=n; i++)
    {   
        for(int j=1; j<=2*n-1; j++)
        {
            if(j>=n-i+1 && j<=n+i-1)
            {
                if(k<10){
                    printf("  %d",k++);
                }
                else if(k<100){
                    printf(" %d",k++);
                }
                
                else{
                    printf("   ");
                }
            }
        }
        
        printf("\n");
        }
        return 0;
}