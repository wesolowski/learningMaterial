

import os
from os import path
import datetime
from datetime import date, time, timedelta
import time

def main():
    print(os.name)

    print("Item exist: " + str(path.exists("textfiles.txt")))
    print("Item not exist: " + str(path.exists("textfile2.txt")))

    print("Item is a file: " + str(path.isfile("textfiles.txt")))
    print("Item is a dir: " + str(path.isdir("textfiles.txt")))


    print("Item path " + str(path.realpath("textfiles.txt")))
    print("Item path and name" + str(path.split(path.realpath("textfiles.txt"))))

    t = time.ctime(path.getmtime("textfiles.txt"))
    print(t)
    print(datetime.datetime.fromtimestamp(path.getmtime("textfiles.txt")))

    td = datetime.datetime.now() - datetime.datetime.fromtimestamp(
        path.getmtime("textfiles.txt")
    )
    print("It has been " + str(td) + " since the file was modifired")
    print("Or, " + str(td.total_seconds()) + " seconds")
if __name__ == "__main__":
    main()
