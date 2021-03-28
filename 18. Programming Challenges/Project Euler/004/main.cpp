#include <sstream>
#include <string>
#include <iostream>
#include <cstdlib>
#include <math.h>

using namespace std;

//reverse string
void reverse(string& str)
{
    int n = str.length();
  
    // Swap character starting from two
    // corners
    for (int i = 0; i < n / 2; i++)
        swap(str[i], str[n - i - 1]);
}

bool checkPalindrome(long n){
    long m;
    string num  = to_string(n);
    reverse(num);
    stringstream ss(num);
    ss >> m;
    if(n == m){
        return true;
    }
    return false;
}

int main(){
    long mult;
    long maxMult = 0;
    int i;int j; //iterators
    for(i=100;i<1000;i++){
        for(j=100;j<1000;j++){
            mult = i*j;
            if(checkPalindrome(mult)==true && maxMult<mult){
                maxMult = mult;
            }
        }
    }
    
    cout<< maxMult<<endl;
    system("pause>0");
    return 0;
}