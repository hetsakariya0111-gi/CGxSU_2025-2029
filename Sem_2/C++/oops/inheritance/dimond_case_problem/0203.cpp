#include<iostream>
#include<string>

using namespace std;

class Parent1{
    
    public:
    
      void display(){
          cout << "The display fucntion is decalred inside PARENT1 class" << endl;
      }
    
};

class Child1 : public Parent1{
    public:
    
      void display1(){
          cout << "The display1 fucntion is decalred inside Child1 class which extended Parent1 class" << endl;
      }

    
};

class Child2 : public Parent1{
    public:
    
      void display2(){
          cout << "The display2 fucntion is decalred inside Child1 class which extended Parent1 class" << endl;
      }

    
};

class Child3 : public Child1, public Child2{
    public:
    
      void display3(){
          cout << "The display3 fucntion is decalred inside Child1 class which extended Parent1 class" << endl;
      }

    
};

int main(){

    Child3 c1;
    c1.Child1::display();

    return 0;
}