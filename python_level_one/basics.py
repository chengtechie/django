# a = 3
# b = 4
# print(a + b)

mystring = 'abcdefg'
print(mystring[2:]) # cdefg
print(mystring[:3]) # abc
print(mystring[2:5]) # cde
print(mystring[::2]) # aceg

mystring = "Hello World"
print(mystring.split('e')) # 'H' 'llo World"
mystring = "Item One: {x} Item Two: {y}".format(x = "dog", y = "cat")
print(mystring)