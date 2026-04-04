#include<iostream>
#include<string>

using namespace std;
// Parent classs.....
class Laptop{
    public:
        //Common members....
        string Ram;
        string Display;
        string Storage;
        
       Laptop(string Ram, string Display, string Storage){
            cout << "The parent constructor is getting execute" << endl;
            
            this->Ram = Ram;
            this->Display = Display;
            this->Storage = Storage;
            
            cout << "The value is intialized successfully through parent Constructor"<<endl;
            
        }
 
        
        // void allocateData(string Ram, string Display, string Storage){
        //     cout << "The parent fucntion is getting execute" << endl;
            
        //     this->Ram = Ram;
        //     this->Display = Display;
        //     this->Storage = Storage;
            
        //     cout << "The value is intialized successfully through parent fucntion"<<endl;
            
        // }
        
        void display(){
            cout << "The diosplay fucntion declared in parent class Laptop is executing" << endl;
            cout << "Ram: "   << this->Ram <<endl;
            cout << "Display: " << this->Display << endl;
            cout << "Storage: " << this->Storage << endl;
        }
        
};

// Child class of Laptop parent class....
class Lenovo : public Laptop{
    // Distinct Memnbers...
    public:
        
        string Ram_type;
        string Storage_Type;
        
        Lenovo(string Ram_type, string Storage_Type,string Ram, string Display, string Storage):Laptop(Ram, Display, Storage){
            cout<<"Now the children constructor is getting execute after parent constructor" << endl;
            this->Ram_type = Ram_type;
            this->Storage_Type = Storage_Type;
            cout<<"Now the children constructor got execute after parent constructor" << endl;
        };
        
        void display1(){
            cout << "The diosplay fucntion declared in Children class Laptop is executing" << endl;
            cout << "Ram Type: "   << this->Ram_type <<endl;
            cout << "Storage Type: " << this->Storage_Type << endl;
       
        }
};



int main(){
    
    cout << "Children class object is creating now:  " << endl;
    
    Lenovo l1("16GB", "1TBSSD", "Ram is available", "Display is available", "Storage is available");
    
    // l1.allocateData("Ram is available", "Display is available", "Storage is available");
    
    l1.display();
    
    l1.display1();
    
    return 0;
}