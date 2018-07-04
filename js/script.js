// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*
  EXTRA CREDIT
  - Add Tags property to the array.
  - Random background colour.
  - Auto-refresh the quote after a set amount of time.
    >>> window.setInterval() && window.setTimeout()
*/
var intervalID = setInterval(printQuote, 3000);

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
  date: '2017', tag:'Movies'},
  {quote: 'We rip out so much of ourselves to be cured of things faster than we should that we go bankrupt by the age of thirty'
  + 'and have less to offer each time we start with someone new. But to feel nothing so as not to feel anything - what a waste!',
  source: 'Mr. Perlman', citation:'Call Me By Your Name',
  date:'2017', tag: 'Books'},
  {quote: 'hello', source: 'adele', citation:'n/a', date:'2017', tag:'music'},
  {quote: 'hello', source: 'adele', citation:'n/a', date:'2017', tag:'music'},
  {quote: 'hello', source: 'adele', citation:'n/a', date:'2017', tag:'music'}
  // {quote: , source:, citation:, date:, tag:},
  // {quote: , source:, citation:, date:, tag:},
  // {quote: , source:, citation:, date:, tag:},
  // {quote: , source:, citation:, date:, tag:},
  // {quote: , source:, citation:, date:, tag:},
  // {quote: , source:, citation:, date:, tag:},
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
  var ranQuote = quotes[Math.floor(Math.random() * (quotes.length - 1))];
  return ranQuote;
}

/*
  Function: printQuote()
  Input: None
  Output: None
  Description:
    - Calls the getRandomQuote() function and stores that object into a variable.
    - Constructs a string containing the different properties of the quote object.
*/
/*
                      FORMAT for printQuote()
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>

printQuote only adds a <span class="citation"> if the quote object has a citation property.
printQuote only adds a <span class="year"> if the quote object has a year property.
printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that:
document.getElementById('quote-box').innerHTML
*/
function printQuote() {
  var ranQuote = getRandomQuote();
  var quoteShown = '<p class="quote">';
  quoteShown += (ranQuote.quote + '</p>');
  quoteShown += ('<p class="source">'
              + ranQuote.source
                + '<span class="citation">'
                + ranQuote.citation + '</span>'
                  + '<span class="year">'
                  + ranQuote.date + '</span>'
                    + '<span class="year">'
                    + ranQuote.tag + '</span>');
  quoteShown += '</p>';
  document.getElementById('quote-box').innerHTML = quoteShown;
}
