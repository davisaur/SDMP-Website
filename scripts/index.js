
const splashes = ["Fuck you!",
    "Die!",
    "Enjoying the goonsesh?",
    "Keep gooning!",
    "Zzz...",
    "*Yawn*",
    "I'm going to bed.",
    "SDMP, baby!",
    "eat pant conar",
    "My father was a Funko Pop!",
    "What did Hillary spit in that cup?",
    "Baba Booey!",
    "Liberal free!",
    "Stream Lilac Boy!",
    "Stream Alex Unknown!",
    "funny cats 5",
    "Sleep deprivation!",
    "100% MrToasten Free!",
    "Don't stop mewing!",
    "Negative canthal tilt!",
    "200% more airplanes!",
    "Crack.",
    "Peter, what are you doing?",
    "WHAT THE FUCK?!",
    "Sponsored by JetBlue!",
    "Conservatives only!",
    "Live. Laugh. Goon.",
    "elon r u ok",
    "I know what you are.",
    "Game over.",
    "English only!",
    "Are you hard right now?",
    "Four more years!",
    "Make America Goon Again!",
    "insect.christmas"
];

window.addEventListener("load", (event) => {
    var splash = splashes[Math.floor(Math.random()*splashes.length)];
    document.querySelector(".home-heading").innerHTML = splash;
});