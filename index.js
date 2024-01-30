// constants to pull in required inquirer module and shape + svg objects
const  inquirer = require("inquirer");
const fs = require('fs');
const {Circle, Triangle, Square} = require("./lib/shapes.js");
const {writeFile} = require("fs/promises");
const SVG = require("./lib/svg.js");


// function uses inquirer to ask user for desired logo characteristics
function createLogo() {
inquirer
    .prompt([
    {
        type: "input",
        name: "charsLogo",
        message: "Please, enter up to 3 characters for your logo",
        validate: charsInput => {
            if (charsInput) {
                return true;
            } else {
                console.log("Please, enter between 1 and 3 characters")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "charsColor",
        message: "Enter a color for characters",
    },
    {
        type: "list",
        name: "shapeType",
        message: "Pick one of the following shapes for your logo",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color to give the shape more style",
    },

    ])

    // use logo characteristics to generate svg file
    .then (({ charsLogo, charsColor, shapeType, shapeColor}) => {
    var shape;
    switch (shapeType) {
        case "Circle":
        shape = new Circle();
        break;
        case "Triangle":
        shape = new Triangle();
        break;
        case "Square":
        shape = new Square();
        break;
    }
    // generates the new logo
    shape.setColor(shapeColor);
    const svg = new SVG();
    svg.setText(charsLogo, charsColor);
    svg.setShape(shape)
    const svgMarkup = svg.render();
    return writeFile("logo.svg", svgMarkup);
    })
    .then(() => {
    console.log("Successfully created logo! Open in live server to see your finished product.")
    })
    .catch((error) => {
    console.log("Error!", error)
    });
}

// call createLogo function
createLogo();