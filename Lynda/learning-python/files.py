
def main():

    f = open("textfiles.txt", "w+")

    for i in range(10):
        f.write("This is line " + str(i) + "\r")

    f.close()


    f = open("textfiles.txt", "a")

    for i in range(10):
        f.write("Append This is line " + str(i) + "\r")

    f.close()

    f = open("textfiles.txt", "r")

    if f.mode == 'r':
        content = f.read()
        print(content)

    f.close()

    f = open("textfiles.txt", "r")

    if f.mode == 'r':
        fl = f.readlines()
        for x in fl:
            print(x)

    f.close()

if __name__ == "__main__":
    main()
