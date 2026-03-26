#include<iostream>
#include<string>

using namespace std;

void checkEligibility(string name, int age){
    try{
            if(age > 18){
        cout <<"The particular user is eligible to vote" << endl;
          }
            else{
            throw (age);
       }
    }
    catch(string err){
        cout << "The err msg is: " << err << endl;
    }
    catch(int age){
        cout << "The user is not eligible to vote cause the age is: " << age << endl;
    }
    
    cout <<"The remaining instruction will execute normally" << endl;
    
}

int main(){
    
   string name;
   int age;
   
   cout << "Enter you're name: " << endl;
   cin >> name;
   
   cout <<"Enter you're age: " << endl;
   cin>>age;
   
   checkEligibility(name, age);
   
   cout << "The program will execute normally" << endl;
   
   return 0;
}
