// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Shape = require('./lib/shapes');

// SVG prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter at least 3 characters:',
      validate: function (value) {
        // Check if the value has at least 3 characters
        if (/^.{3,}$/.test(value)) {
          return true; // Valid input
        }
        return 'Please enter at least 3 characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Pick a color or hex code for text color:',
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
      message: 'Pick a color or hex code for shape color:',
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

    // Create a shape instance based on the selected shape
    const shape = new Shape(answers.shape, [svgWidth, svgHeight], answers.shapeColor);
    
    // Calculate the text position within the SVG
    const textX = svgWidth / 2;
    const textY = svgHeight / 2 + 10;

    // Generate the SVG markup
    const svgMarkup = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
      ${shape.render()} <!-- Render the selected shape -->
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
