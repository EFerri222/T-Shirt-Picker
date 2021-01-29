// --- GLOBAL VARIABLES BEGIN ---
var colors = [
    {
        name: "White",
        hexCode: "#FFFFFF"
    },
    {
        name: "Royal Blue",
        hexCode: "#224D8F"
    },
    {
        name: "Heather Sapphire",
        hexCode: "#0076A8"
    },
    {
        name: "Sapphire",
        hexCode: "#0F52BA"
    },
    {
        name: "Lime",
        hexCode: "#92BF55"
    },
    {
        name: "Purple",
        hexCode: "#3F2A56"
    },
    {
        name: "Safety Orange",
        hexCode: "#E5801C"
    },
    {
        name: "Jade Dome",
        hexCode: "#008E85"
    },
    {
        name: "Navy",
        hexCode: "#263147"
    },
    {
        name: "Mint",
        hexCode: "#A0CFAB"
    },
    {
        name: "Black",
        hexCode: "#25282B"
    },
    {
        name: "Heather Military Green",
        hexCode: "#7A8768"
    },
    {
        name: "Irish Green",
        hexCode: "#009E69"
    },
    {
        name: "Cherry Red",
        hexCode: "#AC2B37"
    },
    {
        name: "Heather Purple",
        hexCode: "#614B79"
    },
    {
        name: "Sport Gray",
        hexCode: "#97999B"
    },
    {
        name: "Red",
        hexCode: "#B1302A"
    },
    {
        name: "Navy Heather",
        hexCode: "#333F48"
    },
    {
        name: "Daisy",
        hexCode: "#FED101"
    }
]

// Sets colorsLeft to the VALUE of the colors array (not address reference)
var colorsLeft = [...colors];

// HTML elements
var colorsLeftDisplay = document.getElementById("colors-left");
var getColorButton = document.getElementById("get-color-btn");
var pickedColorDisplay = document.getElementById("picked-color");
var canvas = document.getElementById('canvas');

var tshirt = canvas.getContext('2d');
// --- GLOBAL VARIABLES END ---

// Draws T-shirt
if (canvas.getContext) {
    tshirt.beginPath();
    tshirt.arc(175, 50, 50, 0, Math.PI, false);
    tshirt.lineTo(100,50);
    tshirt.lineTo(25,150);
    tshirt.lineTo(81,175);
    tshirt.lineTo(100,150);
    tshirt.lineTo(100,300);
    tshirt.lineTo(250,300);
    tshirt.lineTo(250,150);
    tshirt.lineTo(269,175);
    tshirt.lineTo(325,150);
    tshirt.lineTo(250,50);
    tshirt.lineTo(225,50);
    tshirt.lineWidth = 5;
    tshirt.stroke();
}

/**
 * Chooses a random color from colorsLeft array
 * Removes that color from colorsLeft
 * Fills t-shirt with that color
 */
function getColor() {
    // colors.length is the max
    var pickedColor = colorsLeft[Math.floor(Math.random() * (colorsLeft.length))];
    pickedColorDisplay.innerHTML = pickedColor.name;
    var index = colorsLeft.indexOf(pickedColor);
    // Removes the picked color from the colorsLeft array
    colorsLeft.splice(index, 1);
    showColorsLeft();
    
    tshirt.fillStyle = pickedColor.hexCode;
    tshirt.stroke();
    tshirt.fill();

    if(colorsLeft.length === 0) {
        getColorButton.innerHTML = "Wash Your Clothes!";
        getColorButton.disabled = true;
        getColorButton.removeEventListener("click", getColor);
        pickedColorDisplay.innerHTML += "... last one!";
    }
}

/**
 * Displays the list of shirts still available
 */
function showColorsLeft() {
    // First, clear display...
    colorsLeftDisplay.innerHTML = "";
    // ...then add an li for each remaining color in the array
    for(var i = 0; i < colorsLeft.length; i++) {
        colorsLeftDisplay.innerHTML += "<div class=col-3>" + "<li>" + colorsLeft[i].name + "</li>";
    }
}

/**
 * Resets:
 * colorsLeft array to initial values
 * Shirt fill color
 * List of shirts displayed
 */
function washClothes() {
    colorsLeft = [...colors];
    tshirt.fillStyle = "#FFFFFF";
    tshirt.fill();
    showColorsLeft();
    pickedColorDisplay.innerHTML = "";
    getColorButton.innerHTML = "Get Random Color";
    getColorButton.disabled = false;
}

// Initial population of shirts available
showColorsLeft();