# mylist = [1,2,3]
# print(len(mylist)) # length
# print(mylist[-1]) # last element
# mylist[1] = 'Cheng' # reassign element
# print(mylist)
# mylist.append('Kim') # add element to a list
# print(mylist)
# list2 = [True, False]
# mylist.extend(list2) # add multiple elements
# print(mylist)
# mylist.pop(1) # remove element at index 1
# print(mylist)

matrix = [[1,2,3], [4,5,6], [7,8,9]]
first_col = [row[0] for row in matrix] # print 1,4,7
print(first_col)