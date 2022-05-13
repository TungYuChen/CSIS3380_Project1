/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

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
    var selectedQuote = quotes[randomNumber];
    document.getElementsByClassName("quote")[0].innerHTML = selectedQuote.quote;
    var sourceHolder = document.getElementsByClassName("source")[0];
    console.log(sourceHolder);
    sourceHolder.innerHTML = "";
    sourceHolder.innerHTML += selectedQuote.writter;
    if (selectedQuote.source != "") {
        sourceHolder.innerHTML += '<span class="citation">' + selectedQuote.source + '</span>';
    }
    if (selectedQuote.year != "") {
        sourceHolder.innerHTML += '<span class="year">' + selectedQuote.year + '</span>';
    }
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);