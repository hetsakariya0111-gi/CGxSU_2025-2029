#include<iostream>
#include<string>

using namespace std;

class BankAccount{
    
    private:
      string password;
      int balance;
      
    public:
      string username;
      
      BankAccount(string name, string pass, int amount){
          if(pass.size() != 0 && amount >0){
              username = name;
              password = pass;
              balance = amount;
              cout << "The account is created and account holder name is: " << username << endl;
          }
          else{
              cout << "Warning: Certain rules you have break so we cannot proceed further" << endl;
          }
      }
      
      void getInfo(string pass){
          if(pass == password){
              cout << "The account holder name is: " << this->username << endl;
              cout <<"The current balance is: " << this->balance << endl;
              cout << "The password is: " << this->password << endl;
          }
          else{
              cout << "Passsword is incorrect" << endl;
          }
      }
      
      void setBalance(string pass, int amount){
          if((pass == password) && amount > 0 )
          {
              balance += amount;
              cout << "Balance is credited and the amount is: " << this->balance << endl; 
          }
          else{
              cout << "Please check you're password or amount must be greater than zero"<< endl;
          }
      }
    
};

int main(){
    
    BankAccount p1("samir singh", "Samir@2009", 766);
    
    p1.getInfo("Samir@2009");
    
    p1.setBalance("Samir@2009", 768);
    
    return 0;
}