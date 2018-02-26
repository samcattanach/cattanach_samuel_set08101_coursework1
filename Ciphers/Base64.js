function Encrypt()
{
  var plain_text = document.getElementById("message").value;
  var cypher_text = window.btoa(plain_text); // Encrypt a string
  document.getElementById("encryptedMessage").innerHTML = cypher_text;
  // Change colour of buttons
  document.getElementById("encrypt").style.background = "#dddddd";
  document.getElementById("decrypt").style.background = "#a7a7a7";
}


function Decrypt()
{
  var plain_text = document.getElementById("message").value;
  var cypher_text = window.atob(plain_text); // Encrypt a string
  document.getElementById("encryptedMessage").innerHTML = cypher_text;
  // Change colour of buttons
  document.getElementById("encrypt").style.background = "#a7a7a7";
  document.getElementById("decrypt").style.background = "#dddddd";
}
