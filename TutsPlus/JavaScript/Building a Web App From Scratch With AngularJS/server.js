var express = require('express'),
    app = express();

app
    .use(express.static('./public'))
    .get('*', function(req, res) {
        res.sendfile('public/main.html');
    })
    .listen(3000);


