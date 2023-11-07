package main

import "fmt"

func main() {
  // Pilihan pulau
  var pulau string
  fmt.Println("Pilih pulau:")
  fmt.Println("1. Sumatera")
  fmt.Println("2. Kalimantan")
  fmt.Println("3. Papua")
  fmt.Println("4. Bali")
  fmt.Println("5. Sulawesi")
  fmt.Println("6. Nusa Tenggara")
  fmt.Println("7. Jawa")
  fmt.Scan(&pulau)

  // Kondisi
  var jawa bool = pulau == "jawa"

  // Output
  if jawa {
    fmt.Println("Jawa adalah kunci")
  } else {
    fmt.Println("Pulau yang dipilih adalah", pulau)
  }
}
