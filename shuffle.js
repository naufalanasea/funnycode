import random

def shuffle_words(sentence):

  words = sentence.split()
  random.shuffle(words)
  return " ".join(words)

sentence = "Taylor Swift Bernyanyi Kodok Ngorek."
shuffled_sentence = shuffle_words(sentence)

print(f"Kalimat awal: {sentence}")
print(f"Kalimat acak: {shuffled_sentence}")
