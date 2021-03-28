#include <sstream>
#include <string>
#include <iostream>
#include <cstdlib>
using namespace std;

int sumthree(int start, int stop){
    int sum_3=0;//sum
    int i;//iterator
    for(i=start;i<stop;i++){
        if(i%3==0){
            sum_3+=i;
        }
    }
    return sum_3;
}

int sumfive(int start, int stop){
    int sum_5 =0;//sum
    int i;//iterator
    for(i=start;i<stop;i++){
        if(i%5==0){
            sum_5+=i;
        }
    }
    return sum_5;
}

int sumfifteen(int start, int stop){
    int sum_15=0;//sum
    int i;//iterator
    for(i=start;i<stop;i++){
        if(i%15==0){
            sum_15+=i;
        }
    }
    return sum_15;
}

int main(){
    string start;
    string stop;
    int istart;
    int istop;
    long total;

    cout << "Input start number: ";
    cin >> start;
    cout << "Input stop number: ";
    cin >> stop;

    stringstream ss1(start);
    stringstream ss2 (stop);

    ss1 >> istart;
    ss2 >> istop;

    total = sumthree(istart, istop) + sumfive(istart,istop) - sumfifteen(istart,istop);

    cout << "Sum is: " << total <<endl;

    system("pause>0");
    return 0;
}