

import urllib.request
import json

def printResults(data):
    theJson = json.loads(data)

    print(theJson["disclaimer"])

    if "EUR" in theJson["bpi"]:
        print("BitCoint Rate: ", theJson["bpi"]["EUR"]["rate"])

    for i in theJson["bpi"]:
        print(theJson["bpi"][i]["rate"])
def main():
    
    urlData = "https://api.coindesk.com/v1/bpi/currentprice/eur.json"
    
    webUrl = urllib.request.urlopen(urlData)
    print("result code: " + str(webUrl.getcode()))
    if(webUrl.getcode() == 200):
        data = webUrl.read()
        printResults(data)

    # Docs
    # https://docs.python.org/3/library/json.html
    
if __name__ == "__main__":
    main()
