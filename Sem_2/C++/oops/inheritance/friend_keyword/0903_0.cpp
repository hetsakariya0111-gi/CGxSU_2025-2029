#include<iostream>
#include<string>

using namespace std;

class BankAccount{
    
    private:
    
      int balance = 0;
      
    protected:
    
      string username;
      
    public:
    
       BankAccount(string name, int bal){
            if(bal > 0){
                username = name;
                balance = bal;
                cout << "The value is intialized for a particular account holdere" << endl;
            }
            else{
                cout << "The amount must be more than zero" << endl;
            }
       }
       
       friend void display(BankAccount& person);
       friend void display1(BankAccount& person);
    
};

void display(BankAccount& person){
    cout << "The account holder name is:-> " << person.username << endl;
    cout <<"The balance is:-> "  << person.balance << endl;
}

void display1(BankAccount& person){
    cout << "The account holder name is:-> " << person.username << endl;
    cout <<"The balance is:-> "  << person.balance << endl;
}

int main(){
    
    BankAccount p1("Samir singh", 86676), p2("Parth", 896858);
    display(p2);
    display1(p1);
    return 0;
}