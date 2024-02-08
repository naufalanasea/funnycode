#include <iostream>

int main() {
  // Array untuk menyimpan karakter suara tawa
  char laugh[] = "hahahahahahahaha";

  // Loop untuk mengulang suara tawa
  for (int i = 0; i < 10; i++) {
    // Mencetak karakter suara tawa
    std::cout << laugh;
  }

  // Menambahkan baris baru
  std::cout << std::endl;

  return 0;
}
