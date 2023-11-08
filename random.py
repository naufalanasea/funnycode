import random

def generate_output():
  # Pilih sebuah bilangan acak antara 1 dan 100
  number = random.randint(1, 100)

  # Pilih sebuah string acak
  string = random.choice(["aku", "kau", "dia", "kami", "kalian", "mereka"])

  # Pilih sebuah kata sifat acak
  adjective = random.choice(["baik", "buruk", "cantik", "jelek", "kaya", "hebat"])

  # Pilih sebuah kata kerja acak
  verb = random.choice(["makan", "minum", "tidur", "jalan", "lari", "bermain"])

  # Gabungkan semua elemen untuk menghasilkan output
  output = f"{number} {string} {adjective} {verb}"

  return output

def main():
  # Tampilkan output
  print(generate_output())

if __name__ == "__main__":
  main()
