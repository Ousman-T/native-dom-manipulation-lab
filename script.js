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
const pastRaces = document.getElementById('past-races');
console.log(pastRaces);
// pastRaces.lastElementChild.previousElementSibling.previousElementSibling.remove();
pastRaces.children[3].remove();

  // Part 6
const li = document.createElement('li');
li.textContent = 'Newark';
console.log(li);
pastRaces.appendChild(li);
  // Part 7
const newarkDiv = document.createElement('div');
newarkDiv.id = ('.blog-post');
const newarkHeader = document.createElement('h2');
newarkHeader.textContent = 'Welcome to Newark';
newarkHeader.id = ('.blog-post');
const newarkPara = document.createElement('p');
newarkPara.id = ('.blog-post');
newarkPara.textContent = 'Welcome to Newark, the city of hemi engines and catalytic converter thiefs. Enjoy yourself, but be careful. ESPECIALLY when driving around in fancy cars!';
console.log(newarkDiv);
console.log(newarkHeader);
console.log(newarkPara);
body.appendChild

  // Part 8
const quoteTitle = document.getElementById('quote-title');
quoteTitle.addEventListener('click', randomQuote);

  // Part 9
const blogPost = document.querySelectorAll('.blog-post');
console.log(blogPost);
blogPost.forEach(div => {
  div.addEventListener('mouseout', )
})



});
