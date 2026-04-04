#include<iostream>


using namespace std;

class Triangle;

class Rectangle{
    
    private:
    
       int length, width;
       
    public:
    
       Rectangle(int length, int width){
           this->length = length;
           this->width = width;
           cout << "The value is intialized inside rectangle data members" << endl;
       }
       
       friend void calculate(Rectangle& rect, Triangle& tri);
    
};


class Triangle{
    
    protected:
    
       int length, width;
       
    public:
    
       Triangle(int length, int width){
           this->length = length;
           this->width = width;
           cout << "The value is intialized inside triangle data members" << endl;
       }
       
       friend void calculate(Rectangle& rect, Triangle& tri);
    
};


void calculate(Rectangle& rect, Triangle& tri){
    cout << "The length of rectangle is:-> " << rect.length << endl;
    cout << "The length of triangle is:-> " << tri.length << endl;

}

int main(){
    
    Rectangle r1(23, 45);
    Triangle t1(78, 67);
    
    calculate(r1, t1);
    return 0;
}