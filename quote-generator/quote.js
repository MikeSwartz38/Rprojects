var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=1",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
		"x-rapidapi-key": "b4eb9af76emsh7020a6011b22356p1d9c80jsnb536b3909cf4"
	}
}

const button = document.getElementById("generate");
const $generatedQuote = $("#quote");
const $generatedAuthor = $("#author");

generate.onclick = () => {
  var quote = null;
  var quoteString = localStorage.getItem('quote');
  if(quoteString != null) {
    quote = JSON.parse(quoteString);
  }
  var todaysDate = (new Date()).toDateString();
  if(quote && quote.date == todaysDate) {
    displayQuote(quote);
    return;
  }
  
  $.ajax(settings).done(function (newQuote) {
    quote = newQuote[0];
    quote.date = todaysDate;
    localStorage.setItem('quote', JSON.stringify(quote));
    displayQuote(quote);
    // console.log(newQuote);
  });
}

function displayQuote(quote) {
  $generatedQuote.text(quote.quote);
  $generatedAuthor.text(quote.author);
}