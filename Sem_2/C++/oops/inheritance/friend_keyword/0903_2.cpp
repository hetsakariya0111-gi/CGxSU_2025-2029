#include<iostream>

using namespace std;

class Class1{
    
    private:
    
       int data;
       
       
    public:
    
       Class1(int value){
           data = value;
       }
       
       friend class Class2;
    
};

class Class2{
    
    public:
    
       void display(Class1& c1){
           cout << "The data which is present in another class and which is private is:-> " << c1.data << endl;
       }
    
};

int main(){
    
    Class1 c1(12);
    
    Class2 c2;
    
    c2.display(c1);
    
    return 0;
}