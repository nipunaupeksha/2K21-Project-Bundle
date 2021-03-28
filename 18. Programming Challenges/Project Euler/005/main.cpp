#include <sstream>
#include <string>
#include <iostream>
#include <cstdlib>
#include <math.h>

using namespace std;

bool divide(long n){
    int i;//iterator
    for(i=1;i<=20;i++){
        if(n%i!=0){
            return false;
        }
    }
    return true;
}

int main(){
    long i=0;//iterator
    bool b = false;
    while(!b){
        i+=1;
        if(divide(i)==true){
            b=true;
        }
    }
    cout<<i<<endl;
    system("pause>0");
    return 0;
}
