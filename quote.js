$(document).ready(function(){

    var randomQuote;
    var randomAuthor;
    

    function getQuotes(){

        $.ajax({
            //?method=getQuote&format=xml&lang=en
            url: 'https://api.forismatic.com/api/1.0/',
            jsonp:'jsonp',
            dataType:'jsonp',
       
            data:{
                method: 'getQuote',
                lang :'en',
                format: 'jsonp'
            },

            success: function(response){

                console.log(response);                

                    if(response != ''){

                        randomQuote = response.quoteText;
                        randomAuthor = response.quoteAuthor;  

                        for(var i=0; i<=randomAuthor.length; i++){

                            var timeAnimation = 500;

                            $("#quoteDisplay #authorbox #authorbox-title").html('');
                                            
                            $("#quoteDisplay #authorbox #authorbox-title").fadeOut(timeAnimation, function(){

                                //s$("#quoteDisplay #authorbox #authorbox-title").html('');

                                $("#quoteDisplay #authorbox #authorbox-title").html(randomAuthor);

                                $("#quoteDisplay #authorbox #authorbox-title").fadeIn(timeAnimation);

                                if(randomAuthor){

                                    $("#authorbox h1#authorbox-title").text('Said by - ' + randomAuthor)
                
                                }else{
                
                                    $("#authorbox h1#authorbox-title").text('Unknown')
                                }

                           });
                        } 


                        for(var i=0; i<=randomQuote.length; i++){

                            var timeAnimation = 500;

                            $("#quoteDisplay #quotebox p#quotebox-text").html('');

                            $("#quoteDisplay #quotebox p#quotebox-text").fadeOut(timeAnimation, function(){

                                //s$("#quoteDisplay #authorbox #authorbox-title").html('');

                                $("#quoteDisplay #quotebox p#quotebox-text").html(randomQuote )
                                .append('<i class="fa fa-quote-right" aria-hidden="true"></i>')
                                .prepend('<i class="fa fa-quote-left" aria-hidden="true"></i>');
                                $("#quoteDisplay #quotebox p#quotebox-text").fadeIn(timeAnimation);
                               
                           });
                                      
                        }
                       
                        return false;
                   

                    }else{

                        $("#quoteDisplay").html('Nothing to show');
                    }
                               
                    
            },
            error: function(err) {

              alert('Oops something went wrong, Please try again.'+ err +'');
              
            }

        });
      
    }

    //quote window

        $("#quotebtn").on('click', function(event){
                        
            event.preventDefault;

            getQuotes();

        });
        //tweet function 

        $('a#tweetz').on('click', function(){

            window.open('https://twitter.com/intent/tweet?text='+randomQuote);


        });

        


});