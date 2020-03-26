
class myClass():
    def method1(self):
        print("myClass method1")

    def method2(self, someString):
        print("myClass method2 " + someString)


class anotherClass():
    def method1(self):
        myClass.method1(self)
        print("anotherClass method1")

    def method2(self, someString):
        print("anotherClass method2 " + someString)




def main():
    c = myClass()
    c.method1()
    c.method2("this is a string")


    c = anotherClass()
    c.method1()
    c.method2("this is a string")


if __name__ == "__main__":
    main()
