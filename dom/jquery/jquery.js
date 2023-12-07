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