/*
Variables globales.
*/
var theToken;


/*
Authentification de l'utilisateur.
Fonction du onclick du bouton de login.
*/
function login_onclick() {
	var username = document.getElementById('login_username').value;
	var password = document.getElementById('login_password').value;
	login(username, password);
}


/*
Authentification de l'utilisateur.
*/
function login(username, password) {
	// Construction de l'URL de login
	var loginUrlBase = "https://inventory-dev.ing.he-arc.ch/api/login/";
	var loginUrl = loginUrlBase + username + "/" + password;

	alert("loginUrl: " + loginUrl);

	// Envoi de la requête de login
	sendRequest(loginUrl, setToken);
}


/*
Set the token.
Callback de la fonction login().
*/
function setToken(response) {
	theToken = response.result;
}


/*
Récupération des détails d'un produit.
Fonction du onclick du bouton.
*/
function getProductDetails_onclick() {
	var productId = document.getElementById('showProductDetails_productId').value;
	getProductDetails(productId);
}


/*
Récupération des détails d'un produit.
*/
function getProductDetails(productId) {
	// Construction de l'URL
	var urlBase = "https://inventory-dev.ing.he-arc.ch/api/rest/";
	var urlClass = "Product/";
	var urlMethod = "info";

	var urlParam = "?productId=";

	var url = urlBase + theToken + "/" + urlClass + urlMethod + urlParam + productId;
	alert("url: " + url);

	// Envoi de la requête
	sendRequest(url, showProductName);
}


/*
Affichage du nom du produit.
Fonction de callback.
*/
function showProductName(response) {
	console.log("product name: " + response.result.name);
}


/*
Emprunt d'un produit.
Fonction du onclick du bouton.
*/
function loanProduct_onclick() {
	var productId = document.getElementById('loanProduct_productId').value;
	var beginDate = document.getElementById('beginDate_productId').value;
	var endDate = document.getElementById('endDate_productId').value;
	loanProduct(productId, beginDate, endDate);
}


/*
Emprunt d'un produit.
*/
function loanProduct(productId, beginDate, endDate) {
	// Construction de l'URL
	var urlBase = "https://inventory-dev.ing.he-arc.ch/api/rest/";
	var urlClass = "Product/";
	var urlMethod = "loan";

	var urlParam1 = "?productId=";
	var urlParam2 = "?beginDate=";
	var urlParam3 = "?endDate=";

	var url = urlBase + theToken + "/" + urlClass + urlMethod
			+ urlParam1 + productId
			+ urlParam2 + beginDate
			+ urlParam3 + endDate;
	alert("url: " + url);

	// Envoi de la requête
	sendRequest(url, null);
}


/*
Retour d'un produit.
Fonction du onclick du bouton.
*/
function returnProduct_onclick(productId) {
	var productId = document.getElementById('returnProduct_productId').value;
	returnProduct(productId);
}


/*
Retour d'un produit.
*/
function returnProduct() {
	// Construction de l'URL
	var urlBase = "https://inventory-dev.ing.he-arc.ch/api/rest/";
	var urlClass = "Product/";
	var urlMethod = "returnProduct";

	var urlParam = "?productId=";

	var url = urlBase + theToken + "/" + urlClass + urlMethod + urlParam + productId;
	alert("url: " + url);

	// Envoi de la requête
	sendRequest(url, null);
}


/*
Recherche d'un produit par son ID.
Fonction du onclick du bouton.
*/
function searchProductById_onclick() {
	var productId = document.getElementById('searchProductById_productId').value;
	searchProductById(productId);
}


/*
Recherche d'un produit par son ID.
*/
function searchProductById(productId) {
	// Construction de l'URL
	var urlBase = "https://inventory-dev.ing.he-arc.ch/api/rest/";
	var urlClass = "Product/";
	var urlMethod = "searchById";

	var urlParam = "?productId=";

	var url = urlBase + theToken + "/" + urlClass + urlMethod + urlParam + productId;
	alert("url: " + url);

	// Envoi de la requête
	sendRequest(url, null);
}


/*
Recherche d'un produit par son nom.
Fonction du onclick du bouton.
*/
function searchProductByName_onclick() {
	var term = document.getElementById('searchProductByName_term').value;
	searchProductByName(term);
}


/*
Recherche d'un produit par son nom.
*/
function searchProductByName(term) {
	// Construction de l'URL
	var urlBase = "https://inventory-dev.ing.he-arc.ch/api/rest/";
	var urlClass = "Product/";
	var urlMethod = "search";

	var urlParam = "?term=";

	var url = urlBase + theToken + "/" + urlClass + urlMethod + urlParam + term;
	alert("url: " + url);

	// Envoi de la requête
	sendRequest(url, null);
}


/*
Envoi d'une requête.
*/
function sendRequest(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		sendRequest_callback(xhr, callback);
	}

	xhr.send();
}


/*
Traitement de la réponse.
*/
function sendRequest_callback(xhr, callback) {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status === 200) {
			var response = JSON.parse(xhr.responseText);

			// Traitement de la réponse
			callback(response);
		}
	}
}
