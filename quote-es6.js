

let randomQuote;
let randomAuthor; 
let myVar;  
let myVar2;  
let timeAnimation = 500;
let counter = 0;

const authorboxTitle = document.querySelector("#quote-box #wrapper h1#author");
const quoteBoxText = document.querySelector("#quote-box #wrapper p#text");

async function getQuotes () {

  let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
  await fetch(
    url,
    {
      method: 'GET',
      headers:{
        'Accept': 'application/json'
      }
    }
    )
  .then(
    response => {      
        //console.log('Request successful', response.json());
        return response.json();      
    }
  ).then(data => {
      //console.log('Request successful', data); 
               
      if(data != ''){

        randomQuote = data.quotes;
        
        //console.log(randomQuote)
        
        quoteBoxText.innerHTML ='';
        authorboxTitle.innerHTML = "";        

        randomQuote.forEach((element,index,array) =>{

          //set a random index
          let random = Math.floor(Math.random()*array.length);
          let timeAnimation = 500; 
                     ;                       
          // myVar = setInterval(fadeOut, timeAnimation); 

          // function fadeOut() {  
             quoteBoxText.innerHTML = array[random].quote;
          //   authorboxTitle.fadeIn(timeAnimation);
          // }
          
          
          authorboxTitle.innerHTML = array[random].author;


        }) 
    
        
        
      }else{
        document.querySelector("#quote-box #wrapper p#text").innerHTML = 'Nothing to show';
      }
    }
  ).catch((err) => {
    console.log('Fetch Error: ', err);
  });               
}

getQuotes();

// //quote window
document.querySelector("#new-quote").addEventListener('click', (event) =>{                    
  event.preventDefault;
  
  getQuotes();
});

//tweet function 
// document.querySelector('a#tweetz').addEventListener('click', () => {
//   window.location = `https://twitter.com/intent/tweet?text=${randomQuote}`;
// });

        


