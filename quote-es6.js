

    var randomQuote;
    var randomAuthor;    

    function getQuotes(){

      fetch(
        'https://api.forismatic.com/api/1.0/',
        {
          method: 'getQuote',
          headers: {
            "Content-type": "text/json"
          },
          credentials: 'include',
          lang :'en',
          format: 'jsonp',
          jsonp:'jsonp',
            dataType:'jsonp'

      

        }
      ).then(
        function(response){
          if(response.status !== 200){
            console.log(response);
            return ;
          }
        }
      ).then(
        function() {

          console.log('Request successful', response.text);
          
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

        }
      ).catch(function(err) {

        console.log('Fetch Error :-S', err);

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

        


