let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

// Part 1: DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.

function changeTitle () {
  let domTitle = document.getElementById("main-title")
  domTitle.textContent = "I'm DOM Toretto."
}

changeTitle()


// let domTitle = document.getElementById("main-title")
// domTitle.textContent = "I'm DOM Toretto."

// Part 2: Select the body and change the background-color to a new color of your choice.

function changeBodyColor() {
  const bodyColor = document.querySelector("body")
  bodyColor.style.backgroundColor = "yellow"
}

changeBodyColor()

// const bodyColor = document.querySelector("body")
// bodyColor.style.backgroundColor = "yellow"

// // Part 3: Select DOM's Favorite Things list and remove the last list item.

function removeLastItem() {
  const favoriteThings = document.querySelector("li:last-child")
  favoriteThings.remove("li-last-child")
}

removeLastItem()

// const favoriteThings = document.querySelector("li:last-child")

// favoriteThings.remove("li-last-child")

// // Part 4: Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements

function changeFont() {
  const changeFontSize = document.querySelectorAll(".special-title")
  for (let i = 0; i < changeFontSize.length; i++) {
  changeFontSize[i].style.fontSize = "2rem"
}
}
changeFont()


// const changeFont = document.querySelectorAll("special-title")

// for (let i = 0; i < changeFont.length; i++) {
//   changeFont[i].style.fontSize = "2rem"
// }

// // Part 5: Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.

function removeChicago() {
  const removeChicago = document.getElementById("past-races")
  if(removeChicago.hasChildNodes()) {
  removeChicago.removeChild(removeChicago.children[3])
}
}

removeChicago()

// const removeChicago = document.getElementById("past-races")

// if(removeChicago.hasChildNodes()) {
//   removeChicago.removeChild(removeChicago.children[3])
// }

// // Part 6: Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list *** I used classList.

function addNewCityEl () {
  const newCityEl = document.createElement("li")
  newCityEl.classList.add("city")
  newCityEl.textContent = "New York"

  const ulEl = document.getElementById("past-races")

  ulEl.append(newCityEl)
}

addNewCityEl()

// const newCityEl = document.createElement("li")
// newCityEl.classList.add("city")
// newCityEl.textContent = "New York"

// const ulEl = document.getElementById("past-races")

// ulEl.append(newCityEl)

// // Part 7: Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.
// //** create a div, then h1, then p tag and append in that order

function newBlogPost() {

const mainElement = document.querySelector(".main")

const newDiv = document.createElement("div")


const newHElement = document.createElement("h1")
newHElement.textContent = "New York City"
// newHElement.backgroundColor = "#FFF"
// newHElement.fontSize = "2em"

const newP = document.createElement("p")
newP.textContent = "I GOT STUCK IN NEW YORK TRAFFIC!"
newDiv.classList.add("blog-post", "purple")


mainElement.append(newDiv)
newDiv.append(newHElement)
newDiv.append(newP)

}

newBlogPost()



// const mainElement = document.querySelector(".main")

// const newDiv = document.createElement("div")
// newDiv.style.backgroundColor = "rebeccapurple"
// newDiv.style.borderRadius = "1rem"
// newDiv.style.height = "250px"
// newDiv.style.margin = "3em"
// newDiv.style.padding = "2rem"

// const newHElement = document.createElement("h2")
// newHElement.textContent = "New York City"
// newHElement.backgroundColor = "#FFF"
// newHElement.fontSize = "2em"

// const newP = document.createElement("p")
// newP.textContent = "I GOT STUCK IN NEW YORK TRAFFIC!"

// mainElement.append(newDiv)
// newDiv.append(newHElement)
// newDiv.append(newP)


// // Part 8 When you reload the page, the script.js file loads a random DOM quote. Let's play with the included function:

function quoteChanger() {
const randomQuote = function() {
document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};

// const quoteSelect = document.getElementById("quote-title")

const quoteSelect = document.querySelector("#quote-title")

quoteSelect.addEventListener("click", randomQuote)
}

quoteChanger()

// const randomQuote = function() {
//   document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
// };

// const quoteSelect = document.getElementById("quote-title")

// quoteSelect.addEventListener("click", randomQuote)

// Part 9 Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseout events while the second handler should be listening for mouseenter events.

const blogPosts = document.querySelectorAll(".blog-post")

blogPosts.forEach((post) => {
  post.addEventListener("mouseenter", function() {
    post.classList.toggle("red")
  })
  post.addEventListener("mouseout", function () {
    post.classList.toggle("red")
  })
  
})

// The mouseouthandler should toggle the class .purple
// The mouseenterhandler should toggle the class .red
// Test it out!

/// JERMAIN'S CODE:///////////////////////////////////
// function addMouseEvents() {
//   let allBlogPosts = document.querySelectorAll('.blog-post');
//   console.log(allBlogPosts);
//   allBlogPosts.forEach(function(blogpost) {
//     console.log()
//     blogpost.addEventListener('mouseout', function() {
//       // blogpost.classList.toggle('purple'); // <-- This is what the instructions indicate. Doesn't work as well
//       blogpost.classList.toggle('red');
//     });
//     blogpost.addEventListener('mouseenter', function() {
//       blogpost.classList.toggle('red');
//     });
//   });
// }
// addMouseEvents()
////////////////////////////////////////////////////////
// const blogpost = document.querySelectorAll(".blog-post")

// // blogpost.addEventListener("mouseout", (eventOne) => {
// //   eventOne.classList.toggle("red")
// // })
// function mouseEnter() {
// blogpost.addEventListener("mouseenter", (event) => {
//   for(let j=0; j< blogpost.length; j++) {
//     blogpost[j].classList.add("red")
//   }
// })
// }

// mouseEnter()
// blogpost.addEventListener("mouseenter", (function) => {
//   for (let j = 0; j < blogpost.length; j++) {
//     blogpost[j].classList.toggle("red")
// })
    
//   }


