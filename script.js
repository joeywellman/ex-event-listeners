// <!-- ## Lightning Exercise 1
// - In your HTML, create three header elements (and h1, an h2, and an h3) and give them each a unique id
// - In your JavaScript file, select each element by its id. 
// - Log each element to the console to make sure you selected it correctly. -->

// console.log(document.querySelector("#main-header"));

// console.log(document.querySelector("#sub-header"));

// console.log(document.querySelector("#main-header"));

// function sayHelloWorld(){
//     console.log("Hello, world!")
// }
// document.querySelector("#main-header").addEventListener("click", sayHelloWorld);


// document.querySelector("#main-header").addEventListener("click", function(){
//     console.log("You clicked on the H1!")
// })

// const h1 = document.querySelector("#main-header");
// console.log(h1);

// ";" not needed on any items above




// ## Lightning Exercise 2
// - Add a click event listener to each heading element you just created. 
// - Inside the event listener's callback function, you should log a string about which element they clicked on to the console

// Removed the function (below) for Exercise 3 Needs!
// function mainHeaderString(){
//     console.log("This is the Main Header of my blog!")
// }
// document.querySelector("#main-header").addEventListener("click", mainHeaderString)


// function subHeaderString(){
//     console.log("This is the Sub-Header of my Awesome Blog!  It lets you know that I am the author!")
// }
// document.querySelector("#sub-header").addEventListener("click", subHeaderString)
// The code BELOW does the same thing as what is written above!!!
document.querySelector("#sub-header").addEventListener("click", () => {
    console.log("This is the Sub-Header!  It lets you know that I am the author!");
})

function tagLineString(){
    console.log("This is the Tagline!  It consists of a personal statement, by me!")
}
document.querySelector("#tagline").addEventListener("click", tagLineString);


// BLOG SECTION EXAMPLE (ONLY)

// const allBlogPosts = document.querySelectorAll(".blog-post")
// console.log(allBlogPosts);

// for (let i = 0; i < allBlogPosts.length; i++){
//     const currentBlogPost = allBlogPosts[i];
//     currentBlogPost.addEventListener("mouseover", (event) => {
//         console.log(event);
//         event.target.classList.add("blue-background");
            // console.log("Here's the text of your blog post: ", event.target.innerHTML);
//     })
//     currentBlogPost.addEventListener("mouseleave", (event) => {
//         console.log(event);
//         event.target.classList.remove("blue-background");
//     })
// }




// ## Lightning Exercise 3
// - Create a CSS file and link it to your HTML file
// - Inside the event listener for your h1 element, add a line of code that will change the text color of the h1 element to red when you click on it.

document.querySelector("#main-header").addEventListener("click", () => {
    event.target.classList.toggle("red-text");
    console.log("this is event.target", event.target);
    console.log("this is its classList", event.target.classList);
})


// CHANGE BACKGROUND ("Dark Theme") BUTTON EXAMPLE

// document.querySelector("#dark-theme").addEventListener("click", () => {
//     document.querySelector("body").classList.toggle("dark-background");
// })


// SUBMIT BUTTON EXAMPLE

// document.querySelector("#contact-submit").addEventListener("click", () => {
    // figure out what's in the text area
// const messageToPrint = document.querySelector("#contact-me").value;
// console.log(messageToPrint);
    // print what's in the text area to the DOM
// console.log(document.querySelector("#output-div"))
    // console.log("You sent a message!");
// })


// SUBMIT TEXT BOX DATA EXAMPLE

// document.querySelector("#contact-me").addEventListener("keyup", () => {
// console.log(document.querySelector("#output-div"))
//     // console.log("You sent a message!");
// })


// EVENT BUBBLING

// document.querySelector("body").addEventListener("click", function() {
//     console.log("You clicked on the body of the DOM")
//     console.log(event.target)
//     if(event.target.id === "dark-theme"){
//         document.querySelector("body").classList.toggle("dark-background")
//     }
// })




// ## Lightning Exercise 4
// - Add a textarea element and a button with the text "Submit" to your HTML file
// - Give the button an id
// - Add a click event listener to the submit button
// - When clicked, it should log the value of the textarea to the console

// document.querySelector("#contact-submit").addEventListener("click", function () {
//     var contactMeText = document.getElementById("contact-me").value;
//     document.getElementById("output-div").innerHTML = contactMeText;
// })

document.querySelector("#contact-me").addEventListener("keyup", () => {
console.log(document.querySelector("#output-div"))
})

document.querySelector("#contact-submit").addEventListener("click", logOnClick)

function logOnClick() {
    var contactMeText = document.getElementById("contact-me").value;
    document.getElementById("output-div").innerHTML = contactMeText;
}

// // Multiple Comments Display FAIL
// var commentEntry = document.getElementById("contact-me");
// // Adding to Comment Entry Submit Event
// commentEntry.addEventListener("button", addNewComment);

// function addNewComment(event){
//     event.preventDefault();
//     var newComment = {
//       "comment": document.getElementById('contact-me').value,
//     }

// }