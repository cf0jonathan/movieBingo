// Pool of movie tropes/terms
const CHRISTMAS_MOVIE_TERMS = [
    "Christmas Sweater",
    "Cookie Contest",
    "Decorating the tree",
    "Hot Cocoa",
    "Snow",
    "Candy canes",
    "Up for big promotion",
    "Mistletoe",
    "Main character has a struggleing business",
    "Enemies to lovers",
    "Small town",
    "Christmas festival",
    "Town square",
    "Royalty in disguise",
    "Gingerbread House",
    "Lawn Decorations",
    "Twinkly lights",
    "Christmas Parade",
    "Flannel",
    "Snowman",
    "Santa Clause",
    "Tree Lighting",
    "Ice Skating",
    "Christmas Market",
    "Santa's Sleigh",
    "Christmas Carolling",
    "Family Traditions",
    "Home from the big city",
    "Snowball Fight",
    "Ex Boy Friend shows up",
    "First Act Breakup",
    "Advice from and older relative"
];

// Fisher-Yates shuffle algorithm to randomize an array
function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// Generate the 5x5 bingo card (25 cells total)
function generateCard() {
    const grid = document.getElementById("bingo-grid");
    grid.innerHTML = ""; // Clear existing squares

    // Pick 24 random terms and insert 'FREE SPACE' in the middle (index 12)
    const selectedTerms = shuffle(CHRISTMAS_MOVIE_TERMS).slice(0, 24);
    selectedTerms.splice(12, 0, "FREE SPACE");

    selectedTerms.forEach((term, index) => {
        const cell = document.createElement("div");
        cell.classList.add("bingo-cell");
        cell.textContent = term;

        // Free space starts marked
        if (index === 12) {
            cell.classList.add("free-space", "marked");
        }

        // Toggle marked state on click/tap
        cell.addEventListener("click", () => {
            cell.classList.toggle("marked");
        });

        grid.appendChild(cell);
    });
}

// Set up listeners once DOM is ready
document.getElementById("new-card-btn").addEventListener("click", generateCard);
generateCard();
