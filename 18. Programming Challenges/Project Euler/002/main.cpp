#include <sstream>
#include <string>
#include <iostream>
#include <cstdlib>

#define FOUR_MILLION 4000000

using namespace std;

int main(){
    long i = 1;
    long j = 2;
    long temp;
    long evensum = j;
    while(j<FOUR_MILLION){
        temp = i;
        i = j;
        j = temp+j;
        if(j%2==0){
            evensum+=j;
        }
    }
    cout << evensum <<endl;
    system("pause>0");
    return 0;
}
