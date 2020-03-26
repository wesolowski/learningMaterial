
import os
from os import path
import shutil
from shutil import make_archive
from zipfile import ZipFile

def main():
    if path.exists("textfiles.txt"):
        src = path.realpath("textfiles.txt")
        dst = src + ".bak"

        shutil.copy(src, dst)
        shutil.copystat(src, dst)

        if path.exists("newfile.txt"):
            os.remove("newfile.txt")

        os.rename("textfiles.txt.bak", "newfile.txt")


        root_dir, tail = path.split(src)
        # shutil.make_archive("archive", "zip", root_dir) #zip all folder

        with ZipFile("testzip.zip", "w") as newzip:
            newzip.write("textfiles.txt")
            newzip.write("newfile.txt")


if __name__ == "__main__":
    main()
