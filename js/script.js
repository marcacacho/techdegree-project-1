// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*
  Array of Quotes (At Least 5 Quotes)
    Must have at LEAST the following two properties:
    Quote & Source
    You can also have:
    Citation & Date || Year (only if possible and applicable to quote)

    This array is global.
*/
var quotes = [
  {quote: 'hello', source: 'adele', citation:'n/a', date:'2017', tag:'music'},
  {quote: 'hello', source: 'adele', citation:'n/a', date:'2017', tag:'music'},
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
                  + ranQuote.date + '</span>');
  quoteShown += ranQuote.tag;
  quoteShown += '</p>';
  document.getElementById('quote-box').innerHTML = quoteShown;
}

/*
  EXTRA CREDIT
  - Add Tags property to the array.
  - Random background colour.
  - Auto-refresh the quote after a set amount of time.
    >>> window.setInterval() && window.setTimeout()
*/
