#include<iostream>
#include<string>

using namespace std;

class Car{
    
    public:
    
    // Car(string a){
    //     this->engine();
    // }
    
      virtual void engine(){
            cout << "Engine is available"<<endl;
        }
        
       virtual void headLight(){
            cout << "It is there"<<endl;
        }
        
       virtual void wheel(){
            cout << "4-wheels are there"<<endl;
        }
        
       virtual ~Car(){
            cout<< "Car is destroyed"<<endl;
        }
};

class Tata : public Car{
    
    public:
    
        Tata(){
            this->engine();
            this->wheel();
        }
    
        void engine()override{
            cout << "PETROL and Diesel engine is available"<<endl;
            cout << "The capacity is 7ltr"<<endl;
        }
        
        void wheel()override{
            cout << "Total 5 wheels will be there in which 4-wheels are already installed and 1 extra wheel for gesture"<<endl;
        }
        
        ~Tata(){
            cout << "Tata is destroyed"<<endl;
        }
    
};

class Honda : public Car{
    
    public:
    
    Honda(){
        this->engine();
        this->headLight();
    }
    
    void engine()override{
            cout << "PETROL and CNG engine is available"<<endl;
            cout << "The capacity is 5.4ltr"<<endl;
    }
    
    void headLight()override{
        cout << "White light is there along with flashing light functionality"<<endl;
    }
    
    ~Honda(){
        cout << "Honda is destroyed"<<endl;
    }
    
};

int main(){
    
    Car* obj1 = new Tata();
    Car* obj2 = new Car();
    obj2->engine();
    Car *obj3 = new Honda();
    
    delete obj1;
    delete obj2;
    delete obj3;
    return 0;
}