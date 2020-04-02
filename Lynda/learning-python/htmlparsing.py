
from html.parser import  HTMLParser

metacount = 0

class MyHTMLParser(HTMLParser):
    def handle_comment(self, data):
        print("comment:", data)
        pos = self.getpos()
        print("\tAt line: ", pos[0], " position ", pos[1])

    def handle_starttag(self, tag, attrs):
        global metacount
       
        print("start tag:", tag)
        pos = self.getpos()
        print("\tAt line: ", pos[0], " position ", pos[1])

        if attrs.__len__() > 0:
            print("\tAttributes:")
            for a in attrs:
                print("\t", a[0], "=", a[1])

    def handle_endtag(self, tag):
        print("end tag:", tag)
        pos = self.getpos()
        print("\tAt line: ", pos[0], " position ", pos[1])

    def handle_data(self, data):
        if data.isspace():
            return
        print("comment:", data)
        pos = self.getpos()
        print("\tAt line: ", pos[0], " position ", pos[1])

def main():
    parser = MyHTMLParser()
    f = open("samplehtml.html")
    if f.mode == "r":
    
        contents = f.read()
        parser.feed(contents)

if __name__ == "__main__":
    main()
