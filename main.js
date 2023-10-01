// select Elements 
let quoteText = document.querySelector("#quote-box  #text");
let authorText = document.querySelector("#author");
let newBtn = document.querySelector("#new-quote");
let twitterBtn = document.querySelector(".links #tweet-quote");
let colorsArray = "123456789ABCDEFabcdef";
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    randomQuoteFunction(data);
  newBtn.onclick = function () {
    randomQuoteFunction(data);
  };
 
  });

  function randomQuoteFunction (array) {
    quoteText.innerHTML =  "";
    authorText.innerHTML = "";
    let randomQuote = array[Math.floor(Math.random() * array.length)]
    quoteText.innerHTML =  randomQuote.text;
    authorText.innerHTML = `- ${randomQuote.author.slice(0,randomQuote.author.indexOf(","))}`;
    twitterBtn.href = `https://twitter.com/intent/tweet?text=${quoteText.innerHTML} By ${authorText.innerHTML}`;
    let color = [];
    for(let i = 0; i<6;i++) {
      let random = colorsArray[Math.floor(Math.random() * colorsArray.length)];
       color.push(random);
      }
    let randomColor = `#${color.join("")}`;
    document.querySelector(":root").style.setProperty('--main-color',  `${randomColor}`);
   

  }