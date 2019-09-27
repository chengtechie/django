if 1 < 1:
    print('hello')
elif 3 == 3:
    print('elif ran')
else:
    print('last')

seq = [1,2,3,4,5]
for num in seq:
    print(num)

d = {"Abraham":1, "Cheng":2, "Kim":3}
for key in d:
    print(key)

mypairs = [(1,2),(3,4),(5,6)]
for t1, t2 in mypairs:
    print(t2)
    print(t1)

it = 0
while it < 5:
    print("while {i}".format(i=it))
    it += 1

print(list(range(0, 20, 2))) # print [0,2,4...18]

x = [1,2,3,4]

print([num**2 for num in x])