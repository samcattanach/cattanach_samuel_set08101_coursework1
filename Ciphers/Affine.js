function Encrypt()
{
  var plain_text = document.getElementById("message").value;
  var cypher_text = [];
  var lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  // for each letter in message
  for(var idx = 0; idx < plain_text.length; idx++)
  {
    // check if character is either upper or lower case
    lowerCase = lowerCaseAlphabet.indexOf(plain_text[idx]);
    upperCase = upperCaseAlphabet.indexOf(plain_text[idx]);
    // if character is not lower case
    if(lowerCase == -1)
    {
      // If the character is upper case
      if(upperCase != -1)
      {
        // change character to Encryptd character and add to cypher_text
        //  Encrypt UPPERCASE CHARACTER
        var coded = (5 * upperCase + 8) % 26;
        var letter = upperCaseAlphabet[coded];
        cypher_text.push(letter);
      }
      // else character is not a letter
      else
      {
      // add character onto cypher_text
      cypher_text.push(plain_text[idx]);
      }
    }
    // the character is lower case
    else
    {
      // change character to Encryptd character and add to cypher_text
      //  Encrypt LOWERCASE CHARACTER
      var coded = (5 * lowerCase + 8) % 26;
      var letter = lowerCaseAlphabet[coded];
      cypher_text.push(letter);
    }
  }
  // Put cypher_text in encryptedMessage
  document.getElementById("encryptedMessage").innerHTML = cypher_text.join("");
// Change colour of buttons
  document.getElementById("encrypt").style.background = "#dddddd";
  document.getElementById("decrypt").style.background = "#a7a7a7";
}



function Decrypt()
{
  var plain_text = document.getElementById("message").value;
  var cypher_text = [];
  var lowerCaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  // for each letter in message
  for(var idx = 0; idx < plain_text.length; idx++)
  {
    // check if character is either upper or lower case
    lowerCase = lowerCaseAlphabet.indexOf(plain_text[idx]);
    upperCase = upperCaseAlphabet.indexOf(plain_text[idx]);
    // if character is not lower case
    if(lowerCase == -1)
    {
      // If the character is upper case
      if(upperCase != -1)
      {
        // change character to Encryptd character and add to cypher_text
        //  Encrypt UPPERCASE CHARACTER
        var coded = (21 * (upperCase - 8));
        while(coded < 0)
        {
          coded = coded + 26;
        }
        coded = coded % 26;
        var letter = upperCaseAlphabet[coded];
        cypher_text.push(letter);
      }
      // else character is not a letter
      else
      {
      // add character onto cypher_text
      cypher_text.push(plain_text[idx]);
      }
    }
    // the character is lower case
    else
    {
      // change character to Encryptd character and add to cypher_text
      //  Encrypt LOWERCASE CHARACTER
      var coded = (21 * (lowerCase - 8));
      while(coded < 0)
      {
        coded = coded + 26;
      }
      coded = coded % 26;
      var letter = lowerCaseAlphabet[coded];
      cypher_text.push(letter);
    }
  }
  // Put cypher_text in encryptedMessage
  document.getElementById("encryptedMessage").innerHTML = cypher_text.join("");
// Change colour of buttons
  document.getElementById("encrypt").style.background = "#a7a7a7";
  document.getElementById("decrypt").style.background = "#dddddd";
}
