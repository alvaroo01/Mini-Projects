const simpleColorArray = ["#f75b11", "#f00080", "#f6ceb4", "#ff6f69", "#fded4e"];

let previousColor = "";
let newColor = "";
let mode = "";

// Function to generate a random color code
const generateRandomColor = () => {
    let n = (Math.random() * 0xffffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

// Function to generate a random color from the simpleColorArray
const generateSimpleColor = () => {
    while (newColor === previousColor) {
        newColor = simpleColorArray[Math.floor(Math.random() * simpleColorArray.length)];
    }
    previousColor = newColor;
    return newColor;
};

// Function to change the background color and update the color code text
const changeColor = (colorCode, container, colorCodeText) => {
    container.style.backgroundColor = colorCode;
    colorCodeText.textContent = ` ${colorCode}`;
    console.log(`Changed color to ${colorCodeText.textContent}`);
}

const changeButtonSize = (mode, simpleButton, hexButton) => {
    if (mode === "simple") {
        simpleButton.style.fontSize = "1.5rem";
        hexButton.style.fontSize = "1.1rem";
    } else if (mode === "hex") {
        simpleButton.style.fontSize = "1.1rem";
        hexButton.style.fontSize = "1.5rem";
    } else {
        alert("Error on changeButtonSize");
    }
}

// Event listener to initialize the app when the document is ready
document.addEventListener("readystatechange", (event) => {
    console.log("readyState: complete");
    setDefaultValues();
    app();
})

const setDefaultValues = () => {
    const simpleButton = document.getElementById("simple-button");
    const hexButton = document.getElementById("hex-button");
    const container = document.querySelector(".container");
    const colorCodeText = document.getElementById("color-code");

    mode = "simple";
    changeButtonSize(mode, simpleButton, hexButton);
    let colorCode = (mode === "simple") ? generateSimpleColor() : generateRandomColor();
    changeColor(colorCode, container, colorCodeText);
}

// Function to initialize the application
const app = () => {
    const simpleButton = document.getElementById("simple-button");
    const hexButton = document.getElementById("hex-button");
    const clickMe = document.getElementById("click-me-button");
    const container = document.querySelector(".container");
    const colorCodeText = document.getElementById("color-code");

    simpleButton.addEventListener("click", (event) => {
        mode = "simple";
        changeButtonSize(mode, simpleButton, hexButton);
        console.log(`Changed to ${mode} mode.`);
    })

    hexButton.addEventListener("click", (event) => {
        mode = "hex";
        changeButtonSize(mode, simpleButton, hexButton);
        console.log(`Changed to ${mode} mode.`);
    })

    clickMe.addEventListener("click", (event) => {
        let colorCode = (mode === "simple") ? generateSimpleColor() : generateRandomColor();
        changeColor(colorCode, container, colorCodeText);
    })
}