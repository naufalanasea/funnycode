#include <iostream>

using namespace std;

int main() {
  string nama;
  cout << "Masukkan nama: ";
  cin >> nama;

  if (nama == "omtamvan") {
    cout << "omtamvan is good" << endl;
  } else {
    cout << "is not good" << endl;
  }

  return 0;
}

//Masukkan nama: omtamvan
//omtamvan is good

//Masukkan nama: bukanomtamvan
//is not good
