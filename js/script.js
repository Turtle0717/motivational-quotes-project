// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Array to hold quotes
var quotes = [
    {
        quote: "A person who never made a mistake never tried anything new.",
        source: "Albert Einstein"
    }
];

//Function to generate a random number and returns a random quote object
function getRandomQuote(quotes) {
    var randomNumber = Math.floor(Math.random());
    return quotes[randomNumber];
}

//Function to to call getRandomQuote function and print quote.
function printQuote() {
    var quoteMessage = getRandomQuote(quotes);
    var message = "<p class='quote'>" + quoteMessage.quote + "</p>" 
    message += "<p class='source'>" + quoteMessage.source + "</p>";
    message += "</p>";
    document.getElementById('quote-box').innerHTML = message;
}