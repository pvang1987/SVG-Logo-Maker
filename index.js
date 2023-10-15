// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

// SVG prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: function (value) {
        return value.length <= 3;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for shape color:',
    },
    {
      type: 'input',
      name: 'fileName',
      message: 'Enter the filename for the SVG:',
      default: 'logo', // Default filename (without the extension)
    },
  ])
  .then((answers) => {
    const svgWidth = 300; // Set the width of the SVG to 300
    const svgHeight = 200; // Set the height of the SVG to 200

    // Determine the selected shape and define it
    let shapeDefinition;
    if (answers.shape === 'Triangle') {
      shapeDefinition = `<polygon points="${svgWidth / 2},0 ${svgWidth},200 0,200" fill="${answers.shapeColor}" />`;
    } else if (answers.shape === 'Circle') {
      shapeDefinition = `<circle cx="${svgWidth / 2}" cy="${svgHeight / 2}" r="${100}" fill="${answers.shapeColor}" />`;
    } else if (answers.shape === 'Square') {
      shapeDefinition = `<rect x="0" y="0" width="${svgWidth}" height="${svgHeight}" fill="${answers.shapeColor}" />`;
    }

    // Calculate the text position within the SVG
    const textX = svgWidth / 2;
    const textY = svgHeight / 2 + 10;

    // Generate the SVG markup with the selected shape
    const svgMarkup = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      ${shapeDefinition} <!-- Render the selected shape -->
      <text x="${textX}" y="${textY}" font-size="40" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>`;

    // Add the .svg extension to the filename
    const fileNameWithExtension = answers.fileName + '.svg';

    // Create SVG file with the specified filename
    const outputFileName = path.join(__dirname, 'examples', fileNameWithExtension);
    fs.writeFileSync(outputFileName, svgMarkup);

    console.log(`SVG generation is successful! ${outputFileName}`);
  })
  .catch((error) => {
    console.error('Something went wrong!');
  });
