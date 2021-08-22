const handOPtions = {
    rock: "assets/Rock.png",

    paper: "assets/Paper.png",

    scissors: "assets/Scissors.png",
};

let score = 0;

const pickUserHand = (hand) => {
    console.log(hand);
    let hands = document.querySelector(".hands");
    let contest = document.querySelector(".contest");

    hands.style.display = "none";
    contest.style.display = "flex";

    document.getElementById("userPickedImage").src = handOPtions[hand];

    pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];

    let cpHand = hands[Math.floor(Math.random() * 3)];
    console.log(cpHand);
    document.getElementById("computerPickImage").src = handOPtions[cpHand];
    referree(hand, cpHand);
};

const referree = (userHand, cpHand) => {
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore((score = score + 1));
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore((score = score + 1));
    }

    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore((score = score + 1));
    }

    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
    }

    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
    }
};

const setDecision = (decison) => {
    document.querySelector(".dicision h1").innerText = decison;
};

const setScore = (score) => {
    document.querySelector(".scoreResulth h1").innerText = score;
};

const newGame = () => {
    let hands = document.querySelector(".hands");
    let contest = document.querySelector(".contest");
    hands.style.display = "flex";
    contest.style.display = "none";
};