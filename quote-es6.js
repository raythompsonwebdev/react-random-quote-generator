

let randomQuote;
const authorboxTitle = document.querySelector("#wrapper #quote-box h2#author");
const quoteBoxText = document.querySelector("#wrapper #quote-box p#text");  
const quoteBox = document.querySelector("#wrapper #quote-box"); 
const tweetButton = document.getElementById("tweet-quote")

authorboxTitle.innerHTML = "Click new quote button ";

quoteBoxText.innerHTML = ' ';
 

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

        return response.json();      
    }
  ).then(data => {
               
      if(data != ''){
        randomQuote = data.quotes;  

        randomQuote.forEach((element,index,array) =>{
          //set a random index
          let random = Math.floor(Math.random()*array.length);
          //display author name
          authorboxTitle.innerHTML = array[random].author;
          //display quote
          quoteBoxText.innerHTML = `" ${array[random].quote} "`;
          //set href attribute to add quote to twitter post
          tweetButton.setAttribute("href", `https://twitter.com/intent/tweet?text=${array[random].quote}`);

          //if author and quote showing add show class
          if(quoteBox){
            quoteBox.classList.add("show");
          }

        });
        
      }else{
        quoteBoxText.innerHTML = 'Sorry ! Nothing To Show.';
        authorboxTitle.innerHTML = 'Sorry ! Nothing To Show.';       
      }
    }
  ).catch((err) => {
    console.log('Fetch Error: ', err);
  });               
}

// //quote window
document.querySelector("#wrapper #new-quote").addEventListener('click', (event) =>{                    
  event.preventDefault;
  //remove show class if added to element
  quoteBox.classList.remove("show");
  //call function
  getQuotes();
});


        


