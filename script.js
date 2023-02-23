let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
mainTitle = document.getElementById('main-title');
mainTitle.textContent = 'Dom Toretto Homepage';

  // Part 2
const body = document.querySelector('body');
body.style.backgroundColor = ('teal');


  // Part 3
favThings = document.getElementById('favorite-things');
favThings.lastElementChild.remove('lastElementChild');
console.log(favThings);

  // Part 4
specialTitle = document.querySelectorAll('.special-title');
console.log(specialTitle);
specialTitle.forEach(title => {
  title.style.fontSize = '2rem';
});

  // Part 5
pastRaces = document.getElementById('past-races');
console.log(pastRaces);
pastRaces.lastElementChild.previousElementChild.previousElementChild.remove();


  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
