//function encrypts plain text using base64 cypher
function Encrypt()
{
  // gets plain text message and encodes it
  var plain_text = document.getElementById("message").value;
  var cypher_text = window.btoa(plain_text);
  // outputs encoded message to encryptedMessage
  document.getElementById("encryptedMessage").innerHTML = cypher_text;
  // Change colour of buttons
  document.getElementById("encrypt").style.background = "#dddddd";
  document.getElementById("decrypt").style.background = "#a7a7a7";
}

//function decrypts plain text using base64 cypher
function Decrypt()
{
  // gets plain text message and encodes it
  var plain_text = document.getElementById("message").value;
  var cypher_text = window.atob(plain_text);
  // outputs encoded message to encryptedMessage
  document.getElementById("encryptedMessage").innerHTML = cypher_text;
  // Change colour of buttons
  document.getElementById("encrypt").style.background = "#a7a7a7";
  document.getElementById("decrypt").style.background = "#dddddd";
}
