$(document).ready(function(){
    //alert('hello');
    
    // using selectors
    
    /*
    $('button').click(function(){ // this function is very general
       $('p').hide(); 
    })
    */ 
    
    $('#hideHeading').click(function(){ // this function is very general
       $('#heading2').hide(); 
    })
    //$('#hideHeading')
    $('#hidePara').click(function(){ // this function is very general
       $('.para').hide(); 
    })
    
    //Show attribute
    
    $('#showValue').click(function(){
        $('#hrefValue').text($('#anchor').attr('href'));
    })
    
    // set text, html or value
    
    $("#btn1").click(function(){
        $('#1').text('Thank you baby!');
    })
    $("#btn2").click(function(){
        $('#2').html('<b>You are the best!</b>');
    })
    $("#btn3").click(function(){
        $('#3').val('Vegeta');
    })

});


// append some paragraphs 

let text1 = "<p>You created me using HTML</p>";
let text2 = $("<p></p>").text("I was created with JQuery");
let text3 = document.createElement('p');
text3.textContent = "I was created from the DOM";

function append(){
    $('body').append(text1, text2, text3);
}