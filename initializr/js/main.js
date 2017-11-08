/*
User authentification
*/

function login() {
  var email = document.getElementById('login_email').value;
  var password = document.getElementById('login_password').value;
  var md5 = "e10adc3949ba59abbe56e057f20f883e";
  var url = "https://demo6654639.mockable.io/api/login/" + email + "/" + md5;

  var xhttp = new XMLHttpRequest();
  xmlHttp.open("POST", url, true);
  xmlHttp.setRequestHeader("Content-type", "application/json");
  xmlHttp.send();
  var response = JSON.parse(xmlHttp.responseText);
}
