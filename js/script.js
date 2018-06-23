// Array to hold quote, source, and property objects.
const quotes = [
    {
        quote: "A person who never made a mistake never tried anything new.",
        source: "Albert Einstein",
        property: "Education"
    },
    {
        quote: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
        source: "Bruce Lee",
        property: "Inspirational"
    },
    {
        quote: "People should pursue what they're passionate about. That will make them happier than pretty much anything else.",
        source: "Elon Musk",
        property: "Passion"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        source: "Confucius",
        property: "Proverb"
    },
    {
        quote: "It's fine to celebrate success but it is more important to heed the lessons of failure.",
        source: "Bill Gates",
        property: "Failure"
    }
];

let html = ""; //Holds quote message.

//Function to generate a random number and returns a random quote object.
const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    return quotes[randomNumber];
}

//Function to generate a random number from 0 - 255 and returns the random number.
const getRandomColorNumber = () => {
    const randomNumber = (Math.random()* 256);
    return randomNumber;
}

/*
Function to to call getRandomQuote function and print quote.
Changes body background color on button click.
*/
const printQuote = () => {
    document.body.style.backgroundColor = "rgb(" + getRandomColorNumber() + "," + getRandomColorNumber() + "," + getRandomColorNumber() + ")";
    const quoteMessage = getRandomQuote(quotes);
    html = "<p class='quote'>" + quoteMessage.quote + "</p>";
    html += "<p class='source'>" + quoteMessage.source + "</p>";
    html += "<p class='property'>" + quoteMessage.property + "</p>";
    html += "</p>";
    document.getElementById('quote-box').innerHTML = html;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Method to show new quote every 30 seconds.
setInterval(printQuote, 30000);
