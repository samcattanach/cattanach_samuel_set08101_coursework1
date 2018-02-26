//function encrypts plain text using affine cypher
function Encrypt()
{
  var plainText = document.getElementById("message").value;
  var lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var cypherText = [];
  // for each letter in message
  for(var c = 0; c < plainText.length; c++)
  {
    // check if character is either upper or lower case
    lowerCaseChar= lowerCaseAlphabet.indexOf(plainText[c]);
    upperCaseChar = upperCaseAlphabet.indexOf(plainText[c]);
    // if character is not lower case
    if(lowerCaseChar== -1)
    {
      // If the character is upper case
      if(upperCaseChar != -1)
      {
        // change character to Encrypted character and add to cypherText
        //  Encrypt upperCaseChar
        var coded = (5 * upperCaseChar + 8) % 26;
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
      //  Encrypt lowerCaseCharCHARACTER
      var coded = (5 * lowerCaseChar+ 8) % 26;
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


//function decrypts plain text using affine cypher
function Decrypt()
{
  var plainText = document.getElementById("message").value;
  var lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var cypherText = [];
  // for each letter in message
  for(var c = 0; c < plainText.length; c++)
  {
    // check if character is either upper or lower case
    lowerCaseChar= lowerCaseAlphabet.indexOf(plainText[c]);
    upperCaseChar = upperCaseAlphabet.indexOf(plainText[c]);
    // if character is not lower case
    if(lowerCaseChar== -1)
    {
      // If the character is upper case
      if(upperCaseChar != -1)
      {
        // change character to Encrypted character and add to cypherText
        //  Encrypt upperCaseChar CHARACTER
        var coded = (21 * (upperCaseChar - 8));
        while(coded < 0)
        {
          coded = coded + 26;
        }
        coded = coded % 26;
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
      //  Encrypt lowerCaseCharCHARACTER
      var coded = (21 * (lowerCaseChar- 8));
      while(coded < 0)
      {
        coded = coded + 26;
      }
      coded = coded % 26;
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
