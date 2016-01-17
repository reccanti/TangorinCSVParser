"use strict";
var csv = require("csv");
var parse = csv.parse;
var fs = require("fs");

// Get the names of the input and output files
var inputname = getInputFile();
var outputname = getOutputFile();

// open the input file and save its contents
var data = getData(inputname);

// parse the contents of the file into a JSON object
var jsonObj = parse(data, {delimiter: "\t"}, function (err, output) {
	if (err) {
		throw new Error("There was an issue parsing the file");
	} else {

		var obj = output.map(function(val) {
			return {
				"name": val[0],
				"kana": val[1],
				"english": val[2],
			}
		});
		return obj;
	}
});
console.log(jsonObj);

// save the contents of the file


/** 
 * Open the specified file and return its contents.
 * @param  {file} filename - the name of the file to open and read.
 * @return {string}          - the contents of the file as a string.
 */
function getData(filename) {
	var datastring = "";
	datastring = fs.readFileSync(filename, "utf8");
	if (!datastring) {
		throw new Error("file could not be read");
	}
	return datastring;
}


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