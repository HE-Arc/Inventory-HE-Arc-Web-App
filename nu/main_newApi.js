/*
Constantes globales.
*/
const urlBase = "https://demo6654639.mockable.io/api/rest/";


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
	var loginUrl = makeUrlLogin(username, password);
	console.log("Login with this username: " + username);
	console.log("URL to login:\n" + loginUrl);

	// Envoi de la requête de login
	sendRequest("GET", loginUrl, processLogin);
}


/*
Construction de l'URL de login.
*/
function makeUrlLogin(username, password) {
	const loginUrlBase = "https://demo6654639.mockable.io/api/login/";

	return loginUrlBase + username + "/" + password;
}


/*
Actions au login de l'utilisateur.
Callback de la fonction login().
*/
function processLogin(response) {
	if (isRequestSuccess(response)) {
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
		printError('login_response', response);
	}
}


/*
Récupère le token de la réponse reçue.
*/
function setToken(response) {
	theToken = response.token;
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
	var url = makeUrlGetProductDetails(productId);
	console.log("URL to retrieve details of product with ID " + productId + ":\n" + url);

	// Envoi de la requête
	sendRequest("GET", url, processProductDetails);
}


/*
Construction de l'URL pour l'affichage d'un produit.
*/
function makeUrlGetProductDetails(productId) {
	var urlClass = "products/";
	var urlMethod = "details";

	return urlBase + theToken + "/" + urlClass + productId + "/" + urlMethod;
}


/*
Affichage des détails du produit.
Fonction de callback.
*/
function processProductDetails(response) {
	if (isRequestSuccess(response)) {
		console.log("Product ID: " + response.product.id
				+ ", product name: " + response.product.name
				+ ", product description: " + response.product.description
				+ ", is loan: " + response.product.is_loan);

		// Affichage des détails du produit
		document.getElementById('getProductDetails_response').innerHTML =
				"ID : " + response.product.id + "<br/>" +
				"Nom : " + response.product.name + "<br/>" +
				"Description : " + response.product.description + "<br/>" +
				"Loué : " + response.product.is_loan;

		// Affichage de la location et du retour du produit
		showLoanAndReturn();
	}
	else {
		// Affichage de l'erreur
		printError('getProductDetails_response', response);

		// Masquage de la location et du retour du produit
		hideLoanAndReturn();
	}
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
	var url = makeUrlSearchProductByName(term);
	console.log("URL to search the product with the name \"" + term + "\":\n" + url);

	// Envoi de la requête
	sendRequest("GET", url, processSearchProductByName);
}


/*
Construction de l'URL pour la recherche d'un produit.
*/
function makeUrlSearchProductByName(term) {
	var urlMethod = "search/";

	return urlBase + theToken + "/" + urlMethod + term;
}


/*
Affichage des produits trouvés.
Fonction de callback.
*/
function processSearchProductByName(response) {
	if (isRequestSuccess(response)) {
		console.log("Number of results: " + response.number_results);
		console.log("Complete response:\n" + JSON.stringify(response));

		// Affichage des résultats
		var responseSection = document.getElementById('searchProductByName_response');
		responseSection.innerHTML = "Nombre de résultats : " + response.number_results;
		responseSection.innerHTML += "</br>";

		responseSection.innerHTML += "<ul id=\"searchProductByName_list\"></ul>";
		var resultsListSection = document.getElementById('searchProductByName_list');
		for (i = 0; i < response.number_results; ++i) {
			var resultId = "searchProductByName_result" + i;

			resultsListSection.innerHTML +=
					"<li>" + "<a " + "id=\"" + resultId + "\"" + " href=\"" + "#" + "\">"
					+ response.results[i].id
					+ ": "
					+ response.results[i].name
					+ "</a>" + "</li>";
/*
			responseSection.innerHTML +=
					"<li>" + "<a " + "href=\"" + makeUrlGetProductDetails(response.results[i].id) + "\">"
					+ response.results[i].id
					+ ": "
					+ response.results[i].name
					+ "</a>" + "</li>";
*//*
			document.getElementById(resultId).onclick = function() { // DEBUG: N'est pas appelé lors du clic... Pourquoi ?
				// Recherche du produit sélectionné
				productId = response.results[i].id;
				getProductDetails(productId);

				alert("You have clicked on the product " + response.results[i].id + "!"); // DEBUG

				return false;
			}
*/
//			document.getElementById(resultId).addEventListener("click", onSearchResultSelection(response), false);
			var truc = document.getElementById(resultId);
			document.getElementById(resultId).addEventListener("click", function()
					{
						alert("Clicked!");
						/*
						productId = response.results[i].id;
						getProductDetails(productId);*/
					}, false);
		}
//		responseSection.innerHTML += "</ul>";
	}
	else {
		// Affichage de l'erreur
		printError('searchProductByName_response', response);
	}
}


function onSearchResultSelection(response) {
	// Recherche du produit sélectionné
	productId = response.results[i].id;
	getProductDetails(productId);

	alert("You have clicked on the product " + response.results[i].id + "!"); // DEBUG

	return false;
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
	var url = makeUrlLoanProduct(productId, beginDate, endDate);
	console.log("URL to loan the product with ID " + productId
			+ " from the " + beginDate
			+ " to the " + endDate
			+ ":\n" + url);

	// Envoi de la requête
	sendRequest("PUT", url, processLoanProduct);
}


/*
Construction de l'URL pour la recherche d'un produit.
*/
function makeUrlLoanProduct(productId, beginDate, endDate) {
	var urlClass = "products/";
	var urlMethod = "loan/";

	return urlBase + theToken + "/" + urlClass + productId + beginDate + "/" + endDate;
}


/*
Affichage des produits trouvés.
Fonction de callback.
*/
function processLoanProduct(response) {
	if (isRequestSuccess(response)) {
		console.log("Loan success!");

		// Affichage des résultats
		document.getElementById('loanProduct_response').innerHTML =
				"Emprunt du produit réussi !";
	}
	else {
		// Affichage de l'erreur
		printError('loanProduct_response', response);
	}
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
	var url = makeUrlReturnProduct(productId);
	console.log("URL to return the product with ID " + productId + ":\n" + url);

	// Envoi de la requête
	sendRequest("PUT", url, processReturnProduct);
}


/*
Construction de l'URL pour la recherche d'un produit.
*/
function makeUrlReturnProduct(productId) {
	var urlClass = "products/";
	var urlMethod = "return";

	return urlBase + theToken + "/" + urlClass + productId + "/" + urlMethod;
}


/*
Affichage des produits trouvés.
Fonction de callback.
*/
function processReturnProduct(response) {
	if (isRequestSuccess(response)) {
		console.log("Return success!");

		// Affichage des résultats
		document.getElementById('returnProduct_response').innerHTML =
				"Retour du produit réussi !";
	}
	else {
		// Affichage de l'erreur
		printError('returnProduct_response', response);
	}
}


/*
Envoi d'une requête.
*/
function sendRequest(method, url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
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


/*
Vérification de la réponse.
*/
function isRequestSuccess(response) {
	return response.success;
}


/*
Affichage des sections Loan et Return.
*/
function showLoanAndReturn() {
	document.getElementById('loanProduct').style.display = 'block';
	document.getElementById('returnProduct').style.display = 'block';
}


/*
Masquage des sections Loan et Return.
*/
function hideLoanAndReturn() {
	document.getElementById('loanProduct').style.display = 'none';
	document.getElementById('returnProduct').style.display = 'none';
}


/*
Affichage de l'erreur.
*/
function printError(elementId, response) {
	document.getElementById(elementId).innerHTML = response.error;
	console.log("Error: " + response.error);
}


/*
Démarrage du scan de codes-barres et codes QR.
*/
function scanCode() {
	let scanner = new Instascan.Scanner({ video: document.getElementById('scanCodePreview') });
	scanner.addListener('scan', function (content) {
		console.log("QR code detected and processed : [" + content + "]");

		// Affichage du contenu du code QR
		document.getElementById("scanCode_response").innerHTML = "Found QR code: [" + content + "]";

		// Recherche du produit correspondant
		productId = content;
		getProductDetails(productId);
	});
	Instascan.Camera.getCameras().then(function (cameras) {
		if (cameras.length > 0) {
			scanner.start(cameras[0]);
		} else {
			console.error('No cameras found.');
		}
	}).catch(function (e) {
		console.error(e);
	});
}
