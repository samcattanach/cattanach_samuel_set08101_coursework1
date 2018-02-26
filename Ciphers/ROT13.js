//function encrypts plain text using ROT13 cypher
function Encrypt()
{
  var rotation = parseInt(document.getElementById("rotation").value);
  var lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var plainText = document.getElementById("message").value;
  var cypherText = [];
  // for each letter in message
  for(var c = 0; c < plainText.length; c++)
  {
    // check if character is either upper or lower case
    lowerCaseChar= lowerCaseAlphabet.indexOf(plainText[c]);
    upperCaseChar= upperCaseAlphabet.indexOf(plainText[c]);

    // if character is not lower case
    if(lowerCaseChar== -1)
    {
      // If the character is upper case
      if(upperCaseChar!= -1)
      {
        // change character to Encrypted character and add to cypherText
        var coded = (upperCaseChar+ rotation) % 26;
        var letter = upperCaseAlphabet[coded];
        cypherText.push(letter);
      }
      // else character is not a letter
      else
      {
      // add character onto cypherText
      cypherText.push(plainText[c]);
      }
    }
    // the character is lower case
    else
    {
      // change character to Encrypted character and add to cypherText
      var coded = (lowerCaseChar+ rotation) % 26;
      var letter = lowerCaseAlphabet[coded];
      cypherText.push(letter);
    }
  }
  // Put cypherText in encryptedMessage
  document.getElementById("encryptedMessage").innerHTML = cypherText.join("");
// Change colour of buttons
  document.getElementById("encrypt").style.background = "#dddddd";
  document.getElementById("decrypt").style.background = "#a7a7a7";
}


//function decrypts plain text using ROT13 cypher
function Decrypt()
{
  var rotation = parseInt(document.getElementById("rotation").value);
  //reverse the rotation
  rotation = rotation * (-1);
  var lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var plainText = document.getElementById("message").value;
  var cypherText = [];
  // for each letter in message
  for(var c = 0; c < plainText.length; c++)
  {
    // check if character is either upper or lower case
    lowerCaseChar= lowerCaseAlphabet.indexOf(plainText[c]);
    upperCaseChar= upperCaseAlphabet.indexOf(plainText[c]);

    // if character is not lower case
    if(lowerCaseChar== -1)
    {
      // If the character is upper case
      if(upperCaseChar!= -1)
      {
        // change character to Encrypted character and add to cypherText
        var coded = (upperCaseChar+ rotation + 26) % 26;
        var letter = upperCaseAlphabet[coded];
        cypherText.push(letter);
      }
      // else character is not a letter
      else
      {
      // add character onto cypherText
      cypherText.push(plainText[c]);
      }
    }
    // the character is lower case
    else
    {
      // change character to Encrypted character and add to cypherText
      var coded = (lowerCaseChar+ rotation + 26) % 26;
      var letter = lowerCaseAlphabet[coded];
      cypherText.push(letter);
    }
  }
  // Put cypherText in encryptedMessage
  document.getElementById("encryptedMessage").innerHTML = cypherText.join("");
// Change colour of buttons
  document.getElementById("encrypt").style.background = "#a7a7a7";
  document.getElementById("decrypt").style.background = "#dddddd";
}
