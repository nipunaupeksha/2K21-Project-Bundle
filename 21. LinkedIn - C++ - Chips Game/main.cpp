#include <iostream>
#include <ctime>
#include <cstdlib>
#include <iomanip>
using namespace std;

const int MAX_CHIPS = 100;
const float MAX_TURN = 0.5;

int main(){
  //variable declaration
  bool playerTurn = true;
  bool gameOver = false;
  int chipsInPile = 0;
  int chipsTaken = 0;
  int maxPerTurn = 0;
  string playerName[2];

  //seed the random number generator
  srand(time(0));

  cout << "Player 1, please input your name:\n";
  cin >> playerName[0];
  cout << "Player 2, please input your name\n";
  cin >> playerName[1];
  cout << "Thanks and good luck!\n";

  chipsInPile = rand() % MAX_CHIPS + 1;
  
  cout << "This round will start with " << chipsInPile << " chips in the pile.\n";

  while(gameOver == false){
    
    do{
      maxPerTurn = chipsInPile*MAX_TURN;
      if(maxPerTurn == 0){
        maxPerTurn = 1;
      }
      cout << "You can only take "<< maxPerTurn <<endl;
      if(playerTurn){
        cout << playerName[0] << " How many chips would you like?\n";
      }else{
        cout << playerName[1] << " How many chips would you like?\n";
      }
      cin >> chipsTaken;
    }while((chipsTaken > maxPerTurn) && (chipsInPile>1));
    chipsInPile = chipsInPile - chipsTaken;
    cout << "There are "<<chipsInPile << " left in the pile.\n";
    if(chipsInPile == 0){
      gameOver = true;
      string winner = playerTurn ? playerName[1] : playerName[0];
      cout << winner << " won the game\n";
    }else{
      playerTurn = !playerTurn;
    }
  }
  
  

  return 0;
}