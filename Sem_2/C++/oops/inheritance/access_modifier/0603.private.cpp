#include<iostream>
#include<string>

using namespace std;

class BankAccount{
    
    // Data members....
    
    public:
       string userName;
       
    private:
       int balance;
       
    public:
    
       BankAccount(string name, int bal){
           userName = name;
           balance = bal;
       }
       
       void display(){
           cout << "Current account holdder name:-> " << this->userName << endl;
           cout << "Current balance is:-> " << this->balance << endl;
       }
    
};

int main(){
    
    BankAccount c1("Samir sinhg", 759);
    c1.display();
    BankAccount c2("Amit", 959);
    c2.display();

    return 0;
}