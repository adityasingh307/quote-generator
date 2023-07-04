var date = new Date();
var c_time = date.getHours();
var num_quo;

const list_quote = [{
        "quote": "And now that you don't have to be perfect, you can be good.",
        "author": "John Steinbeck"
    },
    {
        "quote": "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "I've had the sort of day that would make St. Francis of Assisi kick babies.",
        "author": "Douglas Adams"
    },
    {
        "quote": "Don't cry because it's over. Smile because it happened.",
        "author": "Dr. Seuss"
    },
    {
        "quote": "Everything is hard before it is easy.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "quote": "Anyone who has never made a mistake has never tried anything new.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Don't let your happiness depend on something you may lose.",
        "author": "C.S. Lewis"
    },
    {
        "quote": "Monsters are real, ghosts are real, too. They live inside us, and sometimes they win.",
        "author": "Stephen King"
    },
    {
        "quote": "I want to taste and glory in each day, and never be afraid to experience pain.",
        "author": "Sylvia Plath"
    },
    {
        "quote": "Never think of pain or danger or enemies a moment longer than is necessary to fight them.",
        "author": "Ayn Rand"
    }
]

const list_color = [{
        "bgcol": "#F57C00",
        "lbgcol": "#FFE0B2"
    },
    {
        "bgcol": "#CDDC39",
        "lbgcol": "#F0F4C3"
    },
    {
        "bgcol": "#616161",
        "lbgcol": "#F5F5F5"
    },
    {
        "bgcol": "#009688",
        "lbgcol": "#B2DFDB"
    },
    {
        "bgcol": "#9C27B0",
        "lbgcol": "#E1BEE7"
    },
    {
        "bgcol": "#E91E63",
        "lbgcol": "#F8BBD0"
    },
    {
        "bgcol": "#3F51B5",
        "lbgcol": "#C5CAE9"
    },
    {
        "bgcol": "#5D4037",
        "lbgcol": "#D7CCC8"
    },
    {
        "bgcol": "#455A64",
        "lbgcol": "#CFD8DC"
    },
    {
        "bgcol": "#00BCD4",
        "lbgcol": "#B2EBF2"
    },
]


function loadCont() {

    // Greetings

    if (c_time >= 5 && c_time < 12) {
        document.getElementById("daytime").innerHTML = "morning";
    } else if (c_time >= 12 && c_time < 13) {
        document.getElementById("daytime").innerHTML = "noon";
    } else if (c_time >= 13 && c_time < 16) {
        document.getElementById("daytime").innerHTML = "afternoon";
    } else if (c_time >= 16 && c_time < 19) {
        document.getElementById("daytime").innerHTML = "evening";
    } else {
        document.getElementById("daytime").innerHTML = "night";
    }

    (function () {
        num_quo = Math.floor(Math.random() * 10);
        color_rand = Math.floor(Math.random() * 10);
    })();

    document.getElementById("qts").innerHTML = list_quote[num_quo].quote;
    document.getElementById("auth").innerHTML = list_quote[num_quo].author;

    let c_bg_color = list_color[color_rand].bgcol;
    let cl_bg_color = list_color[color_rand].lbgcol;

    document.querySelector("body").style.backgroundColor = c_bg_color;
    document.getElementById("quote").style.color = c_bg_color;
    document.getElementById("author").style.color = c_bg_color;
    document.getElementById("btn").style.backgroundColor = c_bg_color;
    document.getElementById("quote-container").style.backgroundColor = cl_bg_color;

}