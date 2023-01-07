const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

let apiQuotes = [];
let quote = "";

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
    h1.innerText= quote.text
    h2.innerText= quote.author
  } catch (error) {}
}

getQuotes();
