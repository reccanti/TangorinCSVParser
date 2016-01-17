var parse = require("csv").parse;
var testmodule = require("./testmodule");
testmodule.printA();
testmodule.a = "changing the inner value of testmodule";
testmodule.printA();