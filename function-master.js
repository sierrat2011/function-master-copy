//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//  /* global objectValues */
//     QUnit.test( "objectValues() : Should take an object and return its values in an array", function( assert ) {
//       var objectOne = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
//       var objectTwo = {c: "three", d: "four", crayons: "ponies", dangle: "dingle"};
//       assert.deepEqual(objectValues(objectOne), ["one","two","crayons","dangle"]);
//       assert.deepEqual(objectValues(objectTwo), ["three","four","ponies","dingle"]);
//     });

function objectValues(object) {
    // code
    var newArray =(Object.values(object))
    return newArray  
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// /* global valuesToString */
//     QUnit.test("valuesToString() : Should take an object and return all its string values in a string each separated with a space", function(assert){
//       var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
//       var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
//       assert.equal(valuesToString(objectOne), "one two crayons dangle");
//       assert.equal(valuesToString(objectTwo), "three four ponies dingle");
//     });

function keysToString(object) {
    return Object.keys(object).join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// /* global valuesToString */
//     QUnit.test("valuesToString() : Should take an object and return all its string values in a string each separated with a space", function(assert){
//       var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
//       var objectTwo = {c: "three", boolean: false, d: "four", crayons: "ponies", dangle: "dingle"};
//       assert.equal(valuesToString(objectOne), "one two crayons dangle");
//       assert.equal(valuesToString(objectTwo), "three four ponies dingle");
//     });

function valuesToString(object) {
    return Object.values(object).filter(function(val){
        return typeof val === 'string'
    }).join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// /* global arrayOrObject  */
//     QUnit.test("arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object", function(assert){
//       assert.equal(arrayOrObject({a:"one"}), "object");
//       assert.equal(arrayOrObject([1,2,{}]), "array");
//     });

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array"
    } else {
        return "object"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// /* global capitalizeWord*/
//     QUnit.test("capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized", function(assert){
//       assert.equal(capitalizeWord("greg"), "Greg");
//       assert.equal(capitalizeWord("pumpkin"), "Pumpkin");
//       assert.equal(capitalizeWord("quattuordecillion"), "Quattuordecillion");
//     });

function capitalizeWord(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    return string.toUpperCase()
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
return 'Welcome ' + object.name.charAt(0).toUpperCase() + object.name.slice(1) + '!'
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
return object.name.charAt(0).toUpperCase() + object.name.slice(1) +' is a ' + object.species.charAt(0).toUpperCase() + object.species.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if (!object.hasOwnProperty('noises')) {
    return 'there are no noises'
} else {
    return object.noises.join(' ')
}
} // this is correct in codepen

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
var strArr = string.split(' ')
for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === word) {
        return true
    }
}
return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and add the name to the object's friends array 
// then return the object

function addFriend (name, object) {
 object.friends.push(name)
 return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}