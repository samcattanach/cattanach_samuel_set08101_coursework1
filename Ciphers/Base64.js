function encode()
{
  var plain_text = document.getElementById("message").value;

  var cypher_text = window.btoa(plain_text); // encode a string

  document.getElementById("encryptedMessage").innerHTML = cypher_text;
}
