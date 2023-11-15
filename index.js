//GIVEN a command-line application that accepts user input
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const {Circle, Square, Triangle } = require('./lib/shapes.js'); 
const {writeFIle} = require('fs/promises'); 
const SVG = require('./lib/shapes.test.js'); 

function createLogo() {
    inquirer 
        .prompt([
        {
            type: "input",
            name: "logoChars",
            message: "Enter up to three characters for your logo.",
            validate: charsInput => {
                if (charsInput) {
                    return true; 
                } else {
                    console.log("Enter between 1 and 3 charactors")
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color or hexidecimal number for your text',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Plase select a shape.',
            choices: ["Circle", "Square", "Triangle"],

        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color or hexidecimal number for your text',
        },
        ])

        //enter imputs for all prompts
        .then(({logoChars, textColor, shape, shapeColor}) => {
            let shapetype;
            switch (shape) {
                case 'triangle':
                    shapeType = new Triangle()
                    break;

                case 'square':
                    shapeType = new Square()
                    break;
                
                default:
                case 'circle':
                    shapeType = new Circle()
                    break; 
            }
            // generates new logo with the specific characteristics 
            shapeType.setColor(shapeColor);
            const svg = new SVG();
            svg.setTextColor(textColor, logoChars); 
            svg.setShape(shape); 
            return writeFile('logo.svg', svg.render())
        }).then(() => {
            console.log('Generate logo.svg'); 
        }).catch((error)=> {
            console.log(error);
        })

}

init(); 