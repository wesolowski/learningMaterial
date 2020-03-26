

def func1():
    print("I am a function")

func1()


def func2(arg1, arg2):
    print(arg1, " ",arg2)


func2(1,"test")

def cube(x):
    return x*x*x

res = cube(2)
print(res)

def power(num, x=1):
    result = 1
    for i in range(x):
        result = result * num
    return result

print(power(3,4))
print(power(3))
print(power(x=3, num=5))


def multi_add(*args):
    result = 0
    for x in args:
        result = result + x
    return result


print(multi_add(1,2,3,14,5))