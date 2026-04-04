#include<iostream>


using namespace std;

class Lenovo{
    public:

    void display(){
        cout << "The display function is defined in the parent class which is -> Lenovo" << endl;
    }
};

class Legion : public Lenovo{
    public:

    void display1(){
        cout << "The display1 function is defined in the parent class which is -> Legion" << endl;
    }
};

class Loq : public Lenovo{
    public:

    void display2(){
        cout << "The display2 function is defined in the parent class which is -> Lenovo" << endl;
    }
};

class Ideapad : public Lenovo{
    public:

    void display3(){
        cout << "The display3 function is defined in the parent class which is -> Lenovo" << endl;
    }
};

class Yoga : public Lenovo{
    public:

    void display4(){
        cout << "The display4 function is defined in the parent class which is -> Lenovo" << endl;
    }
};

int mian(){

    Ideapad i1;

    i1.display();
    i1.display3();

    return 0;
}