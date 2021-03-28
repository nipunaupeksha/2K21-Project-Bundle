#include <sstream>
#include <string>
#include <iostream>
using namespace std;

int main(){
    //Input i and j values
    string input1; string input2;
    string delimiter = " ";
    string num1; string num2;
    int i;int j;
    cout << "Input value i: ";
    cin >> input1;
    cout << "Input value j: ";
    cin >> input2;

    stringstream ss1(input1);
    stringstream ss2(input2);
    ss1 >> i;
    ss2 >> j;
    //algorithm
    int t;//Iterator
    int maxIterations=0;
    int iterations;
    int value;
    for(t=i;t<=j;t++){
        value = t;
        iterations = 1;
        while(value!=1){
            if(value%2==0){
                value/=2;
            }else{
                value = 3*value+1;
            }
            iterations+=1;
        }
        if(maxIterations < iterations){
            maxIterations = iterations;
        }
    }
    cout << "Maximum iterations "<< maxIterations << endl;
    return 0;
}
