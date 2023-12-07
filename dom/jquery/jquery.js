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

});