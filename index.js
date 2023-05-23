// TODO: Include packages needed for this application
const inquirer= require('inquirer')
const generateMarkdown= require('./utils/generateMarkdown')
const fs=require('fs')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {message:'What is the title', 
        name:'title',
        type:'input',        
        },
        {message:'What is the Description', 
        name:'description',
        type:'input',        
        }
    ]) .then(function(data){
        console.log(data)
        const string= generateMarkdown(data)
        fs.writeFile('READMEcopy.md',string,function(err){
            if(err) throw err
            console.log('filewritten')
        })
    })
}

// Function call to initialize app
init();
