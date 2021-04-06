#include <cstdio>
#include <iostream>
#include <string>

using namespace std;

string keys[12] = {
    "", "abc", "def",
    "ghi", "jkl", "mno",
    "pqrs", "uvw", "xyz",
    "", "", ""
};

int main(){
    int T; 
    scanf("%d\n",&T);
    for(int t=0;t<T;t++){
        string line;
        getline(cin,line);
        int cnt = 0;
        for(int i=0;i<line.size();i++){
            int cur;
            for(int j=0;j<12;j++){
                for(int k=0;k<keys[i].size();k++){
                    if(line[i] == keys[j][k]){
                        cur = k+1;
                    }
                }
            }
        cnt+=cur;
        }
        printf("Case #%d\n",t+1,cnt);
    }
    return 0;
}