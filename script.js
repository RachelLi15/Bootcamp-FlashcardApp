const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    if (showingTerm == true) {
        document.getElementById("card-content").innerHTML = flashcards[currentIndex].term;
    } else {
        document.getElementById("card-content").innerHTML = flashcards[currentIndex].definition;
    }
}

// Change card appearance when clicked
const cardDiv = document.getElementById("flashcard");

cardDiv.addEventListener("click", function() {
    // changes card face
    showingTerm = !showingTerm;
    displayCard();
});

// Prev button
let prevButton = document.getElementById("prev-btn");

prevButton.addEventListener("click", function() {
    // goes to previous card or starts at end if reached beginning
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    // always displays card term
    showingTerm = true;
    displayCard();
});

// Next button
let nextButton = document.getElementById("next-btn");

nextButton.addEventListener("click", function() {
    // goes to next card or starts at beginning if reached end
    currentIndex = (currentIndex + 1) % flashcards.length;
    // always displays card term
    showingTerm = true;
    displayCard();
});

// Add card button
let addButton = document.getElementById("add-card-btn");

addButton.addEventListener("click", function() {
    // gets input from user
    let cardTerm = document.getElementById("new-term").value;
    let cardDef = document.getElementById("new-definition").value;
    // adds flashcard to array
    flashcards.push({term: cardTerm, definition: cardDef});
    // resets text boxes to empty
    document.getElementById("new-term").value = "";
    document.getElementById("new-definition").value = "";
});

// This line will display the card when the page is refreshed
window.onload = displayCard;