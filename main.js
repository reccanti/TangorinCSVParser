"use strict";
var csv = require("csv");
var fs = require("fs");

// Get the names of the input and output files
var inputname = getInputFile();
var outputname = getOutputFile();

// open the input file and save its contents
// parse the contents of the file into a JSON object
// save the contents of the file

console.log(inputname);
console.log(outputname);


/** 
 * Get the name of the input file specified in the first argument. This is
 * required to perform the parse, so if one isn't specified, throw an error.
 * @return {string} - the name of the file as a string
 */
function getInputFile() {
	if (process.argv[2]) {
		return process.argv[2];
	} else {
		throw new Error("input file was not specified");
	}
}


/** 
 * Get the name of the output file specified in the second argument. If no name
 * was specified, the name of the output file will be "output.json"
 * @return {string} - the name of the file as a string
 */
function getOutputFile() {
	if (process.argv[3]) {
		return process.argv[3];
	} else {
		return "output.json";
	}
}