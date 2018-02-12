function encode()
{
  var plain_text = document.getElementById("message").value;
  var cypher_text = [];
  var lowerAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  // for each letter in message
  for(var idx = 0; idx < plain_text.length; idx++)
  {
    // check if character is either upper or lower case
    lowerCase = lowerAlphabet.indexOf(plain_text[idx]);
    upperCase = upperAlphabet.indexOf(plain_text[idx]);

    // if character is not lower case
    if(lowerCase == -1)
    {
      // If the character is upper case
      if(upperCase != -1)
      {
        // change character to encoded character and add to cypher_text
        var coded = (upperCase + 13) % 26;
        var letter = upperAlphabet[coded];
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
      // change character to encoded character and add to cypher_text
      var coded = (lowerCase + 13) % 26;
      var letter = lowerAlphabet[coded];
      cypher_text.push(letter);
    }
  }
  // Put cypher_text in encryptedMessage
  document.getElementById("encryptedMessage").innerHTML = cypher_text.join("");
}
