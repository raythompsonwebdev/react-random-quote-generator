(function(){

  const QuoteComps = (props) => {
    return (
      <>
        <h1 id="title">Simple Quote Generator - FreeCode Camp</h1>
        
          <div id="quote-box">
            <ReactTransitionGroup.TransitionGroup>
              
            <ReactTransitionGroup.CSSTransition
              key={props.author}
                classNames={{
                enter: "animated",
                enterActive: "zoomIn",
                exit: "animated",
                exitActive: "zoomOut"
              }}
              timeout={1000}>
              <div>
                <span id="author">
                  {props.author}
                  <h1 id="author-title">{props.author}</h1>
                </span>

                <span id="text">                  
                  <p id="quotebox-text">{props.quote}</p>
                </span>
              </div>
            </ReactTransitionGroup.CSSTransition>
          </ReactTransitionGroup.TransitionGroup>
            <button onClick={props.sendQuote} id="new-quote">New Quote</button>

            <a  id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${props.quote} ${props.author}`} target='_blank' title="Post this quote on twitter!">
              {" "}
              Tweet Quote
            </a>
          </div>
      
      </>
    );
  };

  class QuoteApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        author: " ",
        quote: " ",
      };
      this.sendQuote = this.sendQuote.bind(this);
      this.getQuote = this.getQuote.bind(this);
    }

    componentDidMount() {

      this.getQuote();
      
    }

    getQuote() {
        let currentComponent = this; // cached this so that it is available inside fetch
        var url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((response) => {

            if (response != "") {
              let quoteNum = Math.floor(
                Math.random() * response.quotes.length
              ); //quote number
              let randomQuote = response.quotes[quoteNum]; //actual quote

              console.log("Request successful", randomQuote);

              currentComponent.setState({
                quote: randomQuote["quote"],
                author: randomQuote["author"],
              });

            } else {
              currentComponent.setState({
                quote: "unknown",
                author: "unknown",
              });
            }
          })
          .catch(function (err) {
            console.log("Fetch Error :-S", err);
          });
      }

    sendQuote (e) {
      e.preventDefault();
      this.getQuote();
    }

    render() {
      const { quote, author, sendQuote } = this.state
      return <QuoteComps quote={quote} author={author} sendQuote={this.sendQuote} />;
    }
  }

  ReactDOM.render(<QuoteApp />, document.getElementById("root"));

})()    


