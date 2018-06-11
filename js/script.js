// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Array to hold quote and source objects.
var quotes = [
    {
        quote: "A person who never made a mistake never tried anything new.",
        source: "Albert Einstein"
    },
    {
        quote: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
        source: "Bruce Lee"
    },
    {
        quote: "People should pursue what they're passionate about. That will make them happier than pretty much anything else.",
        source: "Elon Musk"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        source: "Confucius"
    },
    {
        quote: "It's fine to celebrate success but it is more important to heed the lessons of failure.",
        source: "Bill Gates"
    }
];

var html = ""; //Holds quote message.

//Function to generate a random number and returns a random quote object.
function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * 5);
    return quotes[randomNumber];
}

//Function to generate a random number from 0 - 255 and returns the random number.
function getRandomColorNumber(){
    var randomNumber = (Math.random()* 256);
    return randomNumber;
}

/*
Function to to call getRandomQuote function and print quote.
Changes body background color on button click.
*/
function printQuote() {
    document.body.style.backgroundColor = "rgb(" + getRandomColorNumber() + "," + getRandomColorNumber() + "," + getRandomColorNumber() + ")";
    var quoteMessage = getRandomQuote(quotes);
    html = "<p class='quote'>" + quoteMessage.quote + "</p>";
    html += "<p class='source'>" + quoteMessage.source + "</p>";
    html += "</p>";
    document.getElementById('quote-box').innerHTML = html;
}
console.log(printQuote);
