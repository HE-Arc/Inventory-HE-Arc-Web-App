/*
User authentification
*/

function login() {
  var username = document.getElementById('login_username').value;
  var password = document.getElementById('login_password').value;
  var md5Pwd = "e10adc3949ba59abbe56e057f20f883e";
  var url = "https://demo6654639.mockable.io/api/login/" + username + "/" + md5Pwd;
  console.log("URL: " + url);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {

    // Débug
    document.getElementById('debug_login').innerHTML =
        "xhr.readyState: " + xhr.readyState + "</br>"
        + "xhr.state: " + xhr.state + "</br>"
        + "xhr: " + xhr;

    //if (xhr.readyState === XMLHttpRequest.DONE && xhr.state === 200) {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.state === 200) {
        var response = JSON.parse(xhr.responseText);
        console.log("Token: " + response.token);
        document.getElementById('debug_login').innerHTML = "Token: " + response.token;
      }
      else {
        console.log("Response is not HTTP 200: " + response);
      }
    }
  }
  xhr.send();
}
