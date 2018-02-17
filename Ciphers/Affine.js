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
        //  ENCODE UPPERCASE CHARACTER
        var coded = (5 * upperCase + 8) % 26;
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
      //  ENCODE LOWERCASE CHARACTER
      var coded = (5 * lowerCase + 8) % 26;
      var letter = lowerAlphabet[coded];
      cypher_text.push(letter);
    }
  }
  // Put cypher_text in encryptedMessage
  document.getElementById("encryptedMessage").innerHTML = cypher_text.join("");
}





//   plaintext	    A	 F	F	 I	N	 E	C	 I	P	 H	E	 R
//       x	        0	 5	5	 8	13 4	2	 8	15 7	4	 17
//   (5x + 8)	      8	 33	33 48	73 28	18 48	83 43	28 93
//(5x + 8) mod 26   8	 7	7	 22 21 2	18 22 5	 17 2	 15
//  ciphertext	    I	 H	H	 W	V	 C	S	 W	F	 R	C	 P

//   a > 0 > 8 > 8 > i







/*
// If the character is upper case
if(upperCase != -1)
{
  // change character to encoded character and add to cypher_text
  //  ENCODE UPPERCASE CHARACTER
  var coded = (5 * (upperAlphabet.indexOf(upperCase)) + 8) % 26;
  var letter = upperAlphabet[coded];
  cypher_text.push(letter);
}
*/
