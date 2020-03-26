f=0
print(f)

f="abc"
print(f)

print('this is a string' + str(123))


def someFunction():
    f="def"
    print(f)

someFunction()
print(f)


def someFunction2():
    global f
    f = "def"
    print(f)


someFunction2()
print(f)

#del f
#print(f)