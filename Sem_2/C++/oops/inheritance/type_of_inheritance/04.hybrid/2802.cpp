#include<iostream>

using namespace std;

class Parent1{
    
    public:
    
      void display(){
          cout << "The display fucntion is decalred inside PARENT1 class" << endl;
      }
    
};

class Parent2{
    public:
    
      void display1(){
          cout << "The display1 fucntion is decalred inside PARENT2 class" << endl;
      }

    
};

class Child1 : public Parent1{
    public:
    
      void display2(){
          cout << "The display2 fucntion is decalred inside Child1 class which extended Parent1 class" << endl;
      }

    
};

class Child2 : public Parent1, public Parent2{
    public:
    
      void display3(){
          cout << "The display3 fucntion is decalred inside child2 class which extended Parent1 and Parent2 class" << endl;
      }

    
};



int main(){
    
    Child1 c1;
    
    c1.display();
    c1.display2();
    // c1.display1();
    
    Child2 c2;
    
    c2.display();
    c2.display1();
    c2.display3();
    
    return 0;
}