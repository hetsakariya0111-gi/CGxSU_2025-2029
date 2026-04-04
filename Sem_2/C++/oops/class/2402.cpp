#include<iostream>
#include<string>

using namespace std;

class Student{
    //  Access modifier use to tell which members are accessible and whic are not....
    public:
    //   Data members....
          string name;
          int age;
          string gender;
    //  Functions members.....
          void display(){ 
              cout<< "Cuurent object name is:  " << this->name << endl;
              cout << "Current age is  " << this->age << " Cuurent gender is:    "  << this->gender << endl;
          }
};

class Human{
    //  Access modifier use to tell which members are accessible and whic are not....
    public:
    //   Data members....
          string name1;
          int age1;
          string gender1;
          int weight;
    //  Functions members.....
          void display(){ 
              cout<< "Cuurent object name is:  " << this->name1 << endl;
              cout << "Current age is  " << this->age1 << " Cuurent gender is:    "  << this->gender1 << endl;
              cout << "Human skeleton is running and wright is :  " << this->weight << endl;
          }
};




int main(){
    
    cout << "Object is created from here:  "  << endl;
    Student s1;
    Human h1;
    
    s1.name = "Samir singh";
    s1.age = 24;
    s1.gender = "male";
    
    h1.name1 = "parth";
    h1.age1= 18;
    h1.gender1 = "male";
    h1.weight = 76;
    
    s1.display();
    h1.display();
    
    return 0;
}