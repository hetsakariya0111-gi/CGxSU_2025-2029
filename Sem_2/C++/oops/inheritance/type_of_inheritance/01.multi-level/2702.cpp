#include<iostream>
#include<string>

using namespace std;

class Parent1{
    
    public:
      
       string name;
       int a;
       
       Parent1(string name, int a){
           cout << "The parent1 construtor will execute first: " << endl;
           this->name = name;
           this->a = a;
           cout << "The paren1 constructor executed: " << this->name << endl;
       }
    
};

class Parent2 : public Parent1{
    
    public:
      
       string name1;
       int a1;
       
       Parent2(string name1, int a1, string name, int a):Parent1(name, a){
           cout << "The parent2 construtor will execute first: " << endl;
           this->name1 = name1;
           this->a1 = a1;
           cout << "The paren2 constructor executed: " << this->name1 <<  endl;
       }
    

    
};

class Child1 : public Parent2{
    
    public:
      
       string name2;
       int a2;
       
       Child1(string name2, int a2, string name1, int a1, string name, int a):Parent2(name1, a1, name, a){
           cout << "The child1 construtor will execute first: " << endl;
           this->name2 = name2;
           this->a2 = a2;
           cout << "The child1 constructor executed: " << this->name2<< endl;
       }
    

};

class Child2 : public Child1{
    
    public:
      
       string name3;
       int a3;
       
       Child2(string name3, int a3, string name2, int a2, string name1, int a1, string name, int a):Child1(name2, a2, name1, a1, name, a){
           cout << "The child2 construtor will execute first: " << endl;
           this->name3 = name3;
           this->a3 = a3;
           cout << "The child2 constructor executed: " << this->name3 << endl;
       }
    

};



int main(){
    
    Child2 c1("LastChild", 4, "SecondLastChild", 3, "SecondParent", 2, "FirstParent", 1);
    return 0;
}