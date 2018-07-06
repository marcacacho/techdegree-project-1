/*
  Name: Marc Anthony Cacho
  Track: Full-Stack JavaScript

  Description: Project for Unit 1 of the Full-Stack JavaScript TechDegree.
              This single JavaScript file randomly displays a quote saved
              in an array to the every 30 seconds, or when the button is pressed.
              The background color also changes when the quote changes.

              ***Note for Marker***
              Some slight changes have been made to not only get the extra credit but improve it in little ways:
              - The lastIndex variable was introduced to prevent the same quote from being obtained twice
                in a row, I found that this makes it better overall for the user to see different quotes
                from such a small pool everytime.
              - The extra credit implementations have been addded in as well; this includes
                > Random background color everytime a new quote is obtained (I wasn't too sure if what I did was
                  what's expected to do this, but I ended up having to change some of the style.css as well to
                  be able to use RGB color as I wasn't sure how to do random math for the HEX code).
                > The extra tags have been added (all quotes have the citation and such but code was implemented just
                  in case a new quote was added and didn't have one).
*/

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Variable to track the last index used; this is to prevent the same one from appearing twice in a row
var lastIndex = -1;
/*
  EXTRA CREDIT
  - Add Tags property to the array.
  - Random background colour.
  - Auto-refresh the quote after a set amount of time.
    >>> window.setInterval() && window.setTimeout()
*/
var intervalID = setInterval(printQuote, 30000);

/*
  Array of Quotes (At Least 5 Quotes)
    Must have at LEAST the following two properties:
    Quote & Source
    You can also have:
    Citation & Date || Year (only if possible and applicable to quote)

    This array is global.
*/
var quotes = [
  {quote: "Here's to the ones who dream, foolish as they may seem. Here's to the hearts that ache; here's to the mess we make.",
  source: 'Mia', citation: 'La La Land',
  date: '2017', tag: 'Movies'},
  {quote: 'We rip out so much of ourselves to be cured of things faster than we should that we go bankrupt by the age of thirty'
  + ' and have less to offer each time we start with someone new. But to feel nothing so as not to feel anything - what a waste!',
  source: 'Mr. Perlman', citation:'Call Me By Your Name',
  date: '2007', tag: 'Books'},
  {quote: 'Some people live more in 20 years than others do in 80. It’s not the time that matters, it’s the person.',
  source: 'The Doctor', citation:'Doctor Who',
  date:'2007', tag: 'Television'},
  {quote: "Once you've met someone you never really forget them. It just takes a while for your memories to return.",
  source: 'Zeniba', citation: 'Spirited Away',
  date: '2001', tag: 'Movies'},
  {quote: "I don’t remember the time where a smile actually meant happiness sadly, so many of my peers only smile to hide things.",
  source: 'r.h Sin', citation:'whiskey words & a shovel II',
  date: '2016', tag: 'Books'},
  {quote: 'Fear not. It will come. At least I hope it does. And when you least expect it. Nature has cunning ways of finding our weakest spot.',
  source: 'Mr. Perlman', citation: 'Call Me By Your Name',
  date: '2007', tag: 'Books'}
  // {quote: , source:, citation:, date:, tag:},
  // {quote: , source:, citation:, date:, tag:},
  // {quote: , source:, citation:, date:, tag:},
];

/*
  Function: getRandomQuote()
  Input: None
  Output: Object
  Description: Returns a randomly selected quote object.
*/
function getRandomQuote() {
  var ranIndex = -1;
  var ranQuote;

  do{
    ranIndex = Math.floor(Math.random() * (quotes.length - 1));
  } while(ranIndex === lastIndex);

  ranQuote = quotes[ranIndex];
  lastIndex = ranIndex;

  return ranQuote;
}

/*
  Function: getRandomColor()
  Input: None
  Output: None
  Description:
    - Gets random values for RGB color space and then applies it to the main body
      and to the load quote button so they match.
    - Runs everytime it's called. 
*/
function getRandomColor() {
  var ranColor = 'ffffff';
  var colorR = Math.floor(Math.random() * 255);
  var colorG = Math.floor(Math.random() * 255);
  var colorB = Math.floor(Math.random() * 255);
  ranColor = 'rgb(' + colorR.toString() + ',' + colorG.toString()
                    + ',' + colorB.toString() + ')';
  document.getElementById('main-body').style.backgroundColor = ranColor;
  document.getElementById('loadQuote').style.backgroundColor = ranColor;
}

/*
  Function: printQuote()
  Input: None
  Output: None
  Description:
    - Calls the getRandomQuote() function and stores that object into a variable.
    - Constructs a string containing the different properties of the quote object.
*/
function printQuote() {
  var ranQuote = getRandomQuote();
  var quoteShown = '<p class="quote">';
  quoteShown += (ranQuote.quote + '</p>');
  quoteShown += ('<p class="source">' + ranQuote.source);

  // Only added if the quote has this property
  if(ranQuote.hasOwnProperty('citation')) {
    quoteShown += ('<span class="citation">' + ranQuote.citation + '</span>');
  }
  if (ranQuote.hasOwnProperty('date')) {
    quoteShown += ('<span class="year">' + ranQuote.date + '</span> ');
  }
  if (ranQuote.hasOwnProperty('tag')) {
    quoteShown += ('<span class="tag">' + ranQuote.tag + '</span>');
  }

  quoteShown += '</p>';
  getRandomColor();
  document.getElementById('quote-box').innerHTML = quoteShown;
}
