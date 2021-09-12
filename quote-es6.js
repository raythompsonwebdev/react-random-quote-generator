

let randomQuote;
let randomAuthor; 
let myVar;  
let myVar2;  

const getQuotes = () =>{
  fetch(
    'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json',
    {          
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  ).then(
    response => {
      if(response.status !== 200){
        return response;
      }
    }
  ).then(response => {
      console.log('Request successful', response);          
      if(response != ''){
        randomQuote = response.quoteText;
        randomAuthor = response.quoteAuthor; 
        for(let i=0; i<=randomAuthor.length; i++){
            let timeAnimation = 500;
            const authorboxTitle2 = document.querySelector("#authorbox h1#authorbox-title");
            const authorboxTitle = document.querySelector("#quoteDisplay #authorbox #authorbox-title");
            authorboxTitle.innerHTML = " " ;                
            myVar = setInterval(fadeOut, timeAnimation);                
            function fadeOut() {  
              authorboxTitle.innerHTML = randomAuthor;
              //authorboxTitle.fadeIn(timeAnimation);

              if(randomAuthor){
              authorboxTitle2.innerHTML = `Said by - ${randomAuthor}`; 
              }else{ 
              authorboxTitle2.innerHTML = `Unknown`;
              }
            }                                
          //   $("#quoteDisplay #authorbox #authorbox-title").fadeOut(timeAnimation, function(){
          //       //s$("#quoteDisplay #authorbox #authorbox-title").html('');
          //       $("#quoteDisplay #authorbox #authorbox-title").html(randomAuthor);
          //       $("#quoteDisplay #authorbox #authorbox-title").fadeIn(timeAnimation);
          //       if(randomAuthor){
          //           $("#authorbox h1#authorbox-title").text('Said by - ' + randomAuthor)    
          //       }else{    
          //           $("#authorbox h1#authorbox-title").text('Unknown')
          //       }
          //  });
        } 
        for(var i=0; i<=randomQuote.length; i++){

          let timeAnimation = 500;
          const quoteBoxText = document.querySelector("#quoteDisplay #quotebox p#quotebox-text");
          quoteBoxText.innerHTML ='';
          myVar2 = setInterval(fadeOut2, timeAnimation);
          const fadeOut2 = () => {
              authorboxTitle2.innerHTML = '';
              quoteBoxText.innerHTML = randomQuote;
              quoteBoxText.append('<i class="fa fa-quote-right" aria-hidden="true"></i>')
              quoteBoxText.prepend('<i class="fa fa-quote-left" aria-hidden="true"></i>');
              //$("#quoteDisplay #quotebox p#quotebox-text").fadeIn(timeAnimation);
                
          };                          
        }           
        return false;  
      }else{
        document.querySelector("#quoteDisplay").innerHTML = 'Nothing to show';
      }
    }
  ).catch((err) => {
    console.log('Fetch Error: ', err);
  });               
}

//quote window
document.querySelector("#new-quote").addEventListener('click', (event) =>{                    
  event.preventDefault;
  getQuotes();
});

//tweet function 
document.querySelector('a#tweetz').addEventListener('click', () => {
  window.location = `https://twitter.com/intent/tweet?text=${randomQuote}`;
});

        


