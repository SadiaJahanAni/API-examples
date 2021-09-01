const loadQuotes = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayQuote(data));
}

const displayQuote = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}