# Dictionary
my_stuff = {"key1": "value1", 'key2': 'value2', 'key3': {'123': [1,2,'grabMe']}}
print(my_stuff['key2']) # value2
print(my_stuff['key3']['123'][2]) # grabMe
my_stuff['key1'] = 'new1'
print(my_stuff)

# Tuples IMUTTABLE!
t = (1,2,3)
print(t[0]) # 1

