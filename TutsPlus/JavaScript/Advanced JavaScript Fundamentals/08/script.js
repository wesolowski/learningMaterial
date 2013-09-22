
(function(){

    //27:00

    var form = document.getElementById('theForm'),
        button = form.myButton,
        textbox = form.myTextbox,
        textarea = form.myTextArea,
        select = form.dayOfWeek;
        color = form.color;
        color2 = form.color2;




    eventUtility.addEvent(form, 'submit', function(evt){
        eventUtility.preventDefault(evt);
    });

    // eventUtility.addEvent(button, 'click', function(evt){
    //     var target = eventUtility.getTarget(evt);

    //     target.disabled = true;
    //     target.disabled = false;
    //     console.log('you clicked me!' );
    //     console.log('target:' , target);
    //     console.log('target.type :', target.type);
    //     console.log('target.value :', target.value);

    // });


    // eventUtility.addEvent(button, 'click', function(evt){

    //     if(textbox.value === "")
    //     {
    //         console.log('please input data in box');
    //         textbox.focus();
    //     }

    //     if(textarea.value === "")
    //     {
    //         console.log('please input data in larger box');
    //     }

    //     textarea.disabled=true;
    //     textarea.select();

    //     textarea.value= "Hallo"

    // });



    eventUtility.addEvent(button, 'click', function(evt){

        var index = select.selectedIndex;
        console.log('index:',index);
        var option = select.options[index];
        console.log('option:',option);

        //new API
        var option = select.selectedOptions[0];
        console.log('new API option:',option);

        select.remove(3);

        var wedOption = new Option('Wednesday', 3);

        // select.options[select.options.length] = wedOption;
        // select.options[3] = wedOption; //replace
        select.add(wedOption, select.options[3]);
    });


    eventUtility.addEvent(button, 'click', function(evt){


        //one checkbox
        // color.disabled = true;
        // color.checked = true;

        var pickedColors = [];

        for(var i = 0, l =color.length; i < l; i++)
        {
            if( color[i].checked )
            {
                // console.log(color[i].value);
                pickedColors.push(color[i].value);
            }

        }
        console.log( 'pickedColors: ', pickedColors.join(", ") );
    });

    eventUtility.addEvent(button, 'click', function(evt){

        var pickedColor = null;

        for(var i = 0, l =color2.length; i < l; i++)
        {
            if( color2[i].checked )
            {
                // console.log(color2[i].value);
                pickedColor = color2[i].value;
            }

        }
        console.log( 'pickedColor: ',pickedColor );
    });

}());