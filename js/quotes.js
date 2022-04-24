const quotes = [
    {
        quote:"Woe be to him that reads but one book.",
        author:"George Herbert",
    },
    {
        quote:"He who multiplies riches multiplies cares.",
        author:"Benjamin Franklin",
    },
    {
        quote:"Where is there dignity unless there is honesty?",
        author:"Cicero",
    },
    {
        quote:"Strength does not come from physical capacity. It comes from an indomitable will.",
        author:"Mahatma Gandhi",
    },
    {
        quote:"Faith is the strength by which a shattered world shall emerge into the light.",
        author:"Helen Keller",
    },
    {
        quote:"The truth is rarely pure and never simple.",
        author:"Oscar Wilde",
    },
    {
        quote:"I never cease being dumbfounded by the unbelievable things people believe.",
        author:"Leo Rosten",
    },
    {
        quote:"An optimist is the human personification of spring.",
        author:"Susan J. Bissonette",
    },
    {
        quote:"Our greatest glory is not in never falling, but in rising every time we fall.",
        author:"Confucius",
    },
    {
        quote:"One must desire something to be alive.",
        author:"Margaret Deland",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
