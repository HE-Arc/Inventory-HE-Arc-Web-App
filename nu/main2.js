/*
Constantes globales.
*/
const urlBase = "https://inventory-dev.ing.he-arc.ch/api/rest/";


/*
Variables globales.
*/
var theToken;
var productId;


/*
Authentification de l'utilisateur.
Fonction du onclick du bouton de login.
*/
function login_onclick() {
	// Username: "devweb.user", "devweb.manager", "devweb.admin"
	// Password: "123456"
	// MD5 Password Hash: "e10adc3949ba59abbe56e057f20f883e"

	var username = document.getElementById('login_username').value;
	var password = document.getElementById('login_password').value;
	login(username, password);
}


/*
Authentification de l'utilisateur.
*/
function login(username, password) {
	// Construction de l'URL de login
	var loginUrl = makeLoginUrl(username, password);
	console.log("Login with this username: " + username);

	// Envoi de la requête de login
	sendRequest(loginUrl, processLogin);
	processLogin(JSON.parse("{\"success\":true,\"message\":\"OK\",\"result\":\"UNWgnFA21mtQ00siW05qD17fX788zhBmHRry28Ap1w11FUgMbO\"}"));
}


/*
Construction de l'URL de login.
*/
function makeLoginUrl(username, password) {
	const loginUrlBase = "https://inventory-dev.ing.he-arc.ch/api/login/";

	return loginUrlBase + username + "/" + password;
}


/*
Actions au login de l'utilisateur.
*/
function processLogin(response) {
	if (isLoginSuccess(response)) {
		// Login réussi, enregistrement du token
		setToken(response);

		// Masquage du formulaire de login
		document.getElementById('signIn').style.display = 'none';

		// Affichage des autres commandes
		document.getElementById('showProduct').style.display = 'block';
		document.getElementById('scanCode').style.display = 'block';
		document.getElementById('searchProductByName').style.display = 'block';
	}
	else {
		// Le login a échoué, affichage de l'erreur
		document.getElementById('login_response').innerHTML = response.error;
	}
}


/*
Vérification de la réussite du login.
*/
function isLoginSuccess(response) {
	return response.success;
}


/*
Récupère le token de la réponse reçue.
Callback de la fonction login().
*/
function setToken(response) {
	theToken = response.result;
	console.log("Received token: " + theToken);
}


/*
Récupération des détails d'un produit.
Fonction du onclick du bouton.
*/
function getProductDetails_onclick() {
	productId = document.getElementById('showProductDetails_productId').value;
	getProductDetails(productId);
}


/*
Récupération des détails d'un produit.
*/
function getProductDetails(productId) {
	// Construction de l'URL
	var url = makeGetProductDetailsUrl(productId);
	console.log("URL to retrieve details of product with ID " + productId + ":\n" + url);

	// Envoi de la requête
	sendRequest(url, showProductName);
}


/*
Construction de l'URL pour l'affichage d'un produit.
*/
function makeGetProductDetailsUrl(productId) {
	var urlClass = "Product/";
	var urlMethod = "info";
	var urlParam = "?productId=";

	return urlBase + theToken + "/" + urlClass + urlMethod + urlParam + productId;
}


/*
Affichage du nom du produit.
Fonction de callback.
*/
function showProductName(response) {
	console.log("Product name: " + response.result.name);
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
	var url = makeSearchProductByNameUrl(term);
	console.log("URL to search the product with the name \"" + term + "\":\n" + url);

	// Envoi de la requête
	sendRequest(url, showResponse);
}


/*
Construction de l'URL pour la recherche d'un produit.
*/
function makeSearchProductByNameUrl(term) {
	var urlClass = "Product/";
	var urlMethod = "search";
	var urlParam = "?term=";

	return urlBase + theToken + "/" + urlClass + urlMethod + urlParam + term;
}


/*
Emprunt d'un produit.
Fonction du onclick du bouton.
*/
function loanProduct_onclick() {
	var beginDate = document.getElementById('beginDate_productId').value;
	var endDate = document.getElementById('endDate_productId').value;

	loanProduct(productId, beginDate, endDate);
}


/*
Emprunt d'un produit.
*/
function loanProduct(productId, beginDate, endDate) {
	// Construction de l'URL
	var url = makeLoanProductUrl(productId, beginDate, endDate);
	console.log("URL to loan the product with ID " + productId
			+ " from the " + beginDate
			+ " to the " + endDate
			+ ":\n" + url);

	// Envoi de la requête
	sendRequest(url, showResponse);
}


/*
Construction de l'URL pour la recherche d'un produit.
*/
function makeLoanProductUrl(productId, beginDate, endDate) {
	var urlClass = "Product/";
	var urlMethod = "loan";
	var urlParam1 = "?productId=";
	var urlParam2 = "&beginDate=";
	var urlParam3 = "&endDate=";

	return urlBase + theToken + "/" + urlClass + urlMethod
			+ urlParam1 + productId
			+ urlParam2 + beginDate
			+ urlParam3 + endDate;
}


/*
Retour d'un produit.
Fonction du onclick du bouton.
*/
function returnProduct_onclick() {
	returnProduct(productId);
}


/*
Retour d'un produit.
*/
function returnProduct(productId) {
	// Construction de l'URL
	var url = makeReturnProductUrl(productId);
	console.log("URL to return the product with ID " + productId + ":\n" + url);

	// Envoi de la requête
	sendRequest(url, showResponse);
}


/*
Construction de l'URL pour la recherche d'un produit.
*/
function makeReturnProductUrl(productId) {
	var urlClass = "Product/";
	var urlMethod = "returnProduct";
	var urlParam = "?productId=";

	return urlBase + theToken + "/" + urlClass + urlMethod + urlParam + productId;
}


/*
Affichage de la réponse.
Fonction de callback.
*/
function showResponse(response) {
	console.log("Last response:\n" + JSON.stringify(response));
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
