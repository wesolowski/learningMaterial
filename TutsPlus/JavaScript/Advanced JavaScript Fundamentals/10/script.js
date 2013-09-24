//JSON - JavaScript object Notation

var rss = {
    channel: {
        title: 'RSS Sample',
        description: 'A sample RSS Feed',
        link: 'http://www.johndeo.com',
        lastBuildDate: "Tue, 19 Feb 2013 13:33:15",
        pubDate: "Tue, 19 Feb 2013 13:33:15",
        items :
        [{
            title: "An Item's Title",
            description: 'A Item',
            link: 'http://www.johndoe.com/item1',
            pubDate: "Tue, 19 Feb 2013 13:33:15"
        }]
    }
};

var person = rss;

console.log(rss.channel.title);

var xhrGet = new XMLHttpRequest();
xhrGet.open("GET", "rss.json.min.txt", true);

xhrGet.onreadystatechange = function() {
    if(xhrGet.readyState === 4)
    {
        // status
        // Error: 404 or 500
        // Success: 200 ,299 or 300
        var status = xhrGet.status;
        if( (status >= 200 && status < 300)
            || status === 304
        )
        {
            console.log( 'xhrGet.responseText', xhrGet.responseText);
            var rss = JSON.parse(xhrGet.responseText);
            console.log('rss.channel.title:' ,rss.channel.title);
            console.log('rss.channel.items[0].description:' ,rss.channel.items[0].description);

            var json = JSON.stringify(rss);
            console.log('json:' ,json);
            console.log('json === xhrGet.responseText:' ,json === xhrGet.responseText);

        }

    }
}

xhrGet.send(null);



var xhrPost = new XMLHttpRequest();
xhrPost.open("POST", "rss.json.min.txt", true);
xhrPost.setRequestHeader("Content-Type", "application/json");
xhrPost.onreadystatechange = function() {
    if(xhrPost.readyState === 4)
    {
        // status
        // Error: 404 or 500
        // Success: 200 ,299 or 300
        var status = xhrPost.status;
        if( (status >= 200 && status < 300)
            || status === 304
        )
        {
            console.log( 'xhrPost.responseText', xhrPost.responseText);
            var rss = JSON.parse(xhrPost.responseText);
            console.log('rss.channel.title:' ,rss.channel.title);
            console.log('rss.channel.items[0].description:' ,rss.channel.items[0].description);

            var json = JSON.stringify(rss);
            console.log('json:' ,json);
            console.log('json === xhrPost.responseText:' ,json === xhrPost.responseText);

        }

    }
}

xhrPost.send(JSON.stringify(person));


//IE7 not supported JSON!
//polyfill: https://github.com/douglascrockford/JSON-js/blob/master/json2.js