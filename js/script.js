/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

// Assign five quotes as objects to an array
var quotes = [ {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    writter: "Patrick McKenzie",
    source:"Twitter",
    year: "2016"
},
{
    quote: "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
    writter: "Albert Einstein",
    source: "",
    year: ""
},
{
    quote: "Don't diss information.",
    writter: "Elon Musk",
    source: "Twitter",
    year: "2022"
},
{
    quote: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
    writter: "Bill Gates",
    source: "The Road Ahead",
    year: ""
},
{
    quote: "We’re here to put a dent in the universe. Otherwise why else even be here?",
    writter: "Steve Jobs",
    source: "",
    year: "2011"
}];







/***
 * `getRandomQuote` function
***/
// Get a random number but not the previous one to make the quote won't repeat
var randomNumber = 0;
function getRandomQuote() {
    let newRandomNumber = Math.floor(Math.random() * 5);
    while (newRandomNumber == randomNumber) {
        newRandomNumber = Math.floor(Math.random() * 5);
    }
    randomNumber = newRandomNumber;   
}



/***
 * `printQuote` function
***/
function printQuote() {
    getRandomQuote();
    // Get the quote <p> and change the quote to the selected one
    var selectedQuote = quotes[randomNumber];
    document.getElementsByClassName("quote")[0].innerHTML = selectedQuote.quote;
    // Get the source <p> and clean it than add the needed part
    var sourceHolder = document.getElementsByClassName("source")[0];
    sourceHolder.innerHTML = "";
    // Add writter
    sourceHolder.innerHTML += selectedQuote.writter;
    // Add source if existent
    if (selectedQuote.source != "") {
        sourceHolder.innerHTML += '<span class="citation">' + selectedQuote.source + '</span>';
    }
    // Add year if existent
    if (selectedQuote.year != "") {
        sourceHolder.innerHTML += '<span class="year">' + selectedQuote.year + '</span>';
    }
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
// Click listener, but we don't use even now
document.getElementById('load-quote').addEventListener("click", printQuote);