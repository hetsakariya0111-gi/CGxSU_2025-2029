#include<iostream>
#include<string>

using namespace std;

class Parent{
    
    // data members....
    
    public:
       string username;
       
    protected:
       int balance;
       
    // members...
    public:
      Parent(string name, int bal){
          username = name;
          balance = bal;
      }
      
      void display(){
          cout << "Username is:-> " << this->username << endl;
          cout << "Balance is: -> " << this->balance << endl;
      }
};

class Child:public Parent{
    
    public:
    
      Child(string name, int bal):Parent(name, bal){}
      
      void display1(){
          cout << "user name is:->" << username << endl;
          cout <<"Current balance is:-> " << balance << endl;
          
      }
};

int main(){
    
    // Parent p1("Samir sinhg", 74338);
    // p1.display();

    Child c1("samir singh", 789);
    c1.display1();
    return 0;
}