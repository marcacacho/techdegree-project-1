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

/*
  Function: getRandomQuote()
  Input: None
  Output: Object
  Description: Returns a randomly selected quote object.
*/

/*
  Function: printQuote()
  Input: None
  Output:
  Description:
    - Calls the getRandomQuote() function and stores that object into a variable.
    - Constructs a string containing the different properties of the quote object.
    -
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

/*
  EXTRA CREDIT
  - Add Tags property to the array.
  - Random background colour.
  - Auto-refresh the quote after a set amount of time.
    >>> window.setInterval() && window.setTimeout()
*/
