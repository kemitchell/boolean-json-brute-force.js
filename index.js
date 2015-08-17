var evaluate = require('boolean-json-eval')
var powerset = require('powerset')
var variables = require('boolean-json-variables')

function booleanJSONBruteForce(expression) {
  var variableNames = variables(expression)
  var namesLength = variableNames.length
  var guesses = powerset(variableNames)
  var guessesLength = guesses.length
  for (var guessIndex = 0; guessIndex < guessesLength; guessIndex++) {
    var trueValues = guesses[guessIndex]
    var guess = { }
    for (var nameIndex = 0; nameIndex < namesLength; nameIndex++) {
      var name = variableNames[nameIndex]
      guess[name] = trueValues.indexOf(name) > -1 }
    if (evaluate(expression, guess)) {
      return guess } } }

module.exports = booleanJSONBruteForce
