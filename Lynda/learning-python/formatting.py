
from datetime import datetime

def main():

    now = datetime.now()
    print(now.strftime("The current yer is: %Y"))

    print(now.strftime("%a, %d %B %y"))

    print(now.strftime("Locale date and time: %c"))
    print(now.strftime("Locale date: %x"))
    print(now.strftime("Locale time: %X"))

    print(now.strftime("Current time: %I:%M:%S %p"))
    print(now.strftime("24-hour time: %H:%M"))


if __name__ == "__main__":
    main()
