#include <sstream>
#include <string>
#include <iostream>
#include <cstdlib>
#include <math.h>

#define NUMBER 600851475143

using namespace std;

bool checkPrime(long n){
    int i;//iterator
    if(n == 2){
        return true;
    }
    for(i=2;i<(int)sqrt(n)+1;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

int main(){
    long maxPrime = 0;
    int i;
    for(i=2;i<(int)sqrt(NUMBER)+1;i++){
        if(NUMBER%i==0){
            if(checkPrime(i)==true){
                maxPrime = i;
            }
        }
    }
    
    if(checkPrime(NUMBER)==true){
        maxPrime = NUMBER;
    }
    
    cout << maxPrime <<endl;
    system("pause>0");
    return 0;
}