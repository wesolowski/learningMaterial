

    //Not Local. Only check in Server!
    var xhrSynchronous = new XMLHttpRequest();//not in IE6
    xhrSynchronous.open("GET", "textfile.txt", false); //true (asynchronous) or false (synchronous) -> false-> stop JS and wait for Result
    // xhrSynchronous.send(null)//when Post -> data

    console.log(xhrSynchronous.responseText);
    console.log('-----------------');
    //---------------------------------------

    var xhrGet = new XMLHttpRequest();
    xhrGet.open("GET", "textfile.txt", true);
    // xhrGet.open("GET", "textfile2.txt", true); // StatusError: 404

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
            console.log( 'xhrGet.responseText 1', xhrGet.responseText);
            console.log('status:', status);
        }
        else
        {
            console.log('Error. Something bad happened');
        }
    }

    // xhrGet.send(null)

    // console.log(xhrGet.status, 'xhrGet.responseText 2',xhrGet.responseText);


    console.log('-----------------');
    //---------------------------------------

     var form = document.getElementById("theForm");

    eventUtility.addEvent(form, "submit", function(evt) {
        var data = getRequestBody();

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "textfile.txt", true);
        xhr.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
        console.log('data', data);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var status = xhr.status;

                if ((status >= 200 && status < 300) ||
                    status === 304) {
                        console.log(xhr.responseText);
                    } else {
                        console.log(status);
                    }
            }
        };

        xhr.send(data);

        eventUtility.preventDefault(evt);
    });



    var getRequestBody = function() {
        var values = [];

        for (var i = 0, l = form.elements.length; i < l; i = i + 1) {
            var el = form.elements[i],
                name = encodeURIComponent(el.name),
                value = encodeURIComponent(el.value),
                complete = name + "=" + value;

            values.push(complete);
        }

        return values.join("&");
    };



