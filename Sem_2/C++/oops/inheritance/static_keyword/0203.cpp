#include<iostream>
#include<string>

using namespace std;

class CodingGita{
    
    public:
    
    //   data members....
    
        string StudentName;
        int RollNo;
        
    // static data members....
      static  int StudentCount;
      static string Organiztion;
        
    // constructor.....
    
        CodingGita(string Name, int roll){
            this->StudentName = Name;
            this->RollNo = roll;
            ++StudentCount;
        }
        
    // function member...
    
        void display(){
            cout <<"Current student name is->" << this->StudentName << endl;
            cout <<"Current student rollno is->" << this->RollNo << endl;
            cout <<"Current student are->->" << CodingGita::StudentCount << endl;
            cout << "The organization name is::" << CodingGita::Organiztion << endl;

        }
        
    // static fucnrion members...
    
        static void display2(){
            cout <<"The static fucntion belongs to class codinggita not to it's individual object" << endl;
            
        }

        
        static void display1(CodingGita& student){
            cout <<"The static fucntion belongs to class codinggita not to it's individual object" << endl;
            student.display();
            CodingGita::display2();
        }
        
        
     
};

// intializing the particluar static class data mebers.....



int CodingGita::StudentCount= 0;
string CodingGita::Organiztion = "Coding Gita";

int main(){
    
    CodingGita s1("samir", 634);
    // s1.display();
    
    CodingGita s2("Parth", 567);
    // s2.display();
    
    CodingGita s3("Amit", 680);
    // s3.display();

    CodingGita::display1(s3);
    return 0;
}