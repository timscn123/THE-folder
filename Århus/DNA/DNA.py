# Eksemplet fra powerpoint præsentationen
A="xyxxyxyxyyxyxyxyyxyxyxx"
B="xyxyyxyxyxx"

# Algoritmen, der løser vores "String Matching Problem"
def NAIVE_STRING_MATCHER(A,B):
  n = len(A)
  m = len(B)

  for i in range (n-m+1):    #Opsæt den rigtige range
    if (i+m) == B:
      
      return print("found match") #Print hvor der blev fundet et match
  
  return print("no match found") #Print at der ikke blev fundet et match

# Her kører vi algoritmen på eksemplet
NAIVE_STRING_MATCHER(A,B)