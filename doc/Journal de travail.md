# Journal de travail


## Mercredi 17 janvier 2018
### Séance hebdomadaire
* Questions sur le rapport :
  * La page de garde est bonne, il n'y a pas d'experts à inscrire.
  * Faire un chapitre sur les difficultés rencontrées.
    * Noter également les problèmes techniques rencontrés et les solutions apportées.
  * Faire un chapitre sur les bugs connus et solutions potentielles.
  * Conserver le planning original en annexe, noter les écarts rencontrés (optionnel).
* Mise au point concernant le rendu du projet :
  * Professeur (M. David Grunenwald) : Remettre une version PDF du rapport.
  * Responsable MRU (M. Didier Rizzotti) : Remettre une version papier du rapport.
  * Ajouter le rapport au dépôt GitHub, indiquer les annexes.
* Faire un fichier ReadMe donnant la marche à suivre pour déployer l'application et tester sur une autre machine.

### Travail sur le projet
* Rédaction du rapport.
* Préparation de la démonstration pour la présentation.

5 heures


## Mardi 16 janvier 2018
* Rédaction du rapport.
* Correction et optimisation de l'application.

### Calcul des heures passées sur le projet
* Nombre d'heures allouées au PA : 180 heures.
* Nombre d'heures effectuées jusqu'au mercredi 16 janvier 2017 compris : 180.5 heures.

5 heures


## Lundi 15 janvier 2018
* Rédaction du rapport.
* Correction du fichier `manifest.json`.
* Optimisation de l'application.

7 heures


## Jeudi 11 janvier 2018
* Correction du fichier `manifest.json`.

1 heure


## Mercredi 10 janvier 2018
### Séance hebdomadaire
Priorité pour la fin du projet :
* Rédaction du rapport.
* Finaliser les scénarios pour la démo de la présentation.

1 heure


## Mardi 9 janvier 2018
* [Recherche sur la mise en cache des fichiers JavaScript et CSS](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching) :
  * La mise en cache doit être réglée du côté serveur et GitHub.io ne propose pas de paramétrer ça.
  * Utiliser les Service Workers mais [ça ne remplace pas complètement la mise en cache via les entêtes HTTP](https://stackoverflow.com/questions/42466473/if-you-are-using-service-workers-do-you-still-need-cache-control-headers).
* Implémentation d'un Service Worker pour la mise en cache des fichiers sources (HTML, JavaScript, CSS, etc.).
* Ajout d'un fichier `manifest.json` pour l'utilisation de la web app en standalone.

6 heures


## Lundi 8 janvier 2018
* Rédaction du rapport.

6 heures


## Dimanche 7 janvier 2018
Changer les `elem.innerHTML += str` par :

    newElement.innerHTML = str;
    elem.appendChild(newElement);

* Débug et amélioration de la gestion de la caméra.
* Refactoring du code.
* Rédaction du rapport.

5 heures


## Samedi 6 janvier 2018
* Débug de la caméra.

3 heures


## Vendredi 5 janvier 2018
* Ajout de l'autofocus sur les champs "Product ID" et "Begin date" lors de l'affichage des sections correspondantes.
* Débug de la caméra.

2 heures


## Jeudi 4 janvier 2018
* Recherche d'infos sur les techniques de hashage du mot de passe côté client.
  * [Transmettre un simple hash du mdp à la place du mdp en clair ne résout pas le problème de la sécurité](https://stackoverflow.com/a/4121657/6113711).
  * [La solution conventionnelle est de passer par du HTTPS](https://www.sslshopper.com/article-how-to-make-a-secure-login-form-with-ssl.html) (ce qui est déjà le cas).
* Pré-remplissage automatique des champs de date pour l'emprunt de matériel :
  * Date de début : pré-remplis avec la date actuelle.
  * Date de fin : pré-remplie avec la date actuelle + 1 mois.

### Calcul des heures passées sur le projet
* Nombre d'heures allouées au PA : 180 heures.
* Nombre d'heures effectuées jusqu'au mercredi 3 janvier 2017 compris : 141 heures.
* Nombre d'heures restantes : 39 heures.

4 heures


## Mercredi 3 janvier 2018
* Recherche pour l'activation de la mise en cache des fichiers de ressources.

2 heures


## Vendredi 22 décembre 2017
* Filtrage des résultats de la recherche par mots-clés pour supprimer les produits "_false_".
* Ajouter la date actuelle et la date actuelle + 1 mois comme valeurs par défaut dans les champs date pour l'emprunt.
  * Bug encore.

3 heures


## Jeudi 21 décembre 2017
* Refactoring du code de construction des URL des API.

1 heure


## Mercredi 20 décembre 2017
### Séance hebdomadaire
* Ajouter un test dans les résultats de la recherche de produits par mots-clés pour supprimer les produits "_false_".
* Ajouter la date actuelle et la date actuelle + 1 mois comme valeurs par défaut dans les champs date pour l'emprunt.

### Pour la prochaine fois
* Aspect PWA :
  * Mise en cache des fichiers re ressource (HTML, JavaScript, etc.).
    * Attention à fixer une date d'expiration des fichiers en cache pour d'éventuelles mise à jour futures !
* Corriger le bug de la caméra.
* Rédaction du rapport.
* Préparer la démo de la présentation.
* Compter le nombre d'heures de retard sur le projet (180 heures au total) afin de les compenser sur les semaines restantes.

### Travail sur le projet
* Ajout de la récupération de tous les emprunts de l'utilisateur dans la spécification de l'API.
* Rédaction du rapport.

5 heures


## Mardi 19 décembre 2017
* Correction de la gestion de l'API actuelle.

3 heures


## Mercredi 13 décembre 2017
### Séance hebdomadaire
* Envoyer un email à Christophe pour le problème de blocage des requêtes multiorigines (Cross-Origin Request) avec l'API actuelle.
* Bug du choix de la caméra sur iOS 11 : non prioritaire.
* Ajouter le focus sur le champ email au chargement de la page.
* Retirer le login pré-rempli dans le HTML.
* Consulter [le journal de travail sur l'app *NextStop*](https://github.com/HE-Arc/progressive-web-app/wiki/Journal-de-travail) pour l'aspect PWA.

### Pour la prochaine fois
* Commencer l'aspect PWA.
* Continuer le rapport.
* Essayer de mettre en place le JSON Server pour pouvoir faire des requêtes sans être limité aux 10 URL sur Mockable.io.

### Travail sur le projet
* Essayé de définir des routes personnalisées pour [JSON Server](https://github.com/typicode/json-server) mais pas compris comment ça fonctionne...
* Ajout de la liste déroulante pour le choix de l'API.

4 heures


## Mardi 12 décembre 2017
* Installation de [JSON Server](https://github.com/typicode/json-server) et test.
  * Ça fonctionne mais nécessite de refaire une (petite) base de données en JSON.
* Debug du choix de la caméra sur iPad :
  * Problème, il faut un Mac pour débuger sur Safari Mobile...
* Ajout du focus sur les champs de texte lors de l'appuis sur la touche Entrée.
* Responsive avec [Foundation framework](https://foundation.zurb.com/).
* Réorganisation du dépôt GitHub et suppression des anciens fichiers de test.
* [Mise en ligne de la page pour test.](https://armanddelessert.github.io/Inventory-HE-Arc-Web-App/index.html)

6 heures


## Vendredi 8 décembre 2017
* Ajout du support de l'ancienne API en plus de la nouvelle API.
* Suppression du scanner de QR codes _Instascan_.

3.5 heures


## Mercredi 6 décembre 2017
### Séance hebdomadaire
* Débug du problème de sélection des résultats de la recherche d'un produit.
  * Solution : L'ajout du `onClick()` sur le résultat a été déplacé dans une seconde boucle `for`.

#### Pour la prochaine fois :
* Refactoring du code.
* Réfléchir à la suite du projet : Quel partie du projet continuer ? plusieurs voies possibles :
  * Finir l'implémentation des fonctionnalités, améliorer l'interface utilisateur :
    * Corriger le choix de la caméra.
    * Rendre l'interface responsive sur mobile.
    * Diminuer les actions nécessaires à l'utilisateur lors de l'utilisation.
  * Faire la partie PWA :
    * Mise en cache des produits empruntés par l'utilisateur.
* Faire le rapport.

* Rendre réponse au prof sur le choix des objectifs pour la prochaine fois.

1.5 heure


## Mardi 5 décembre 2017
* Recherche d'autres bibliothèques de scan de codes 1D/2D (codes-barres, codes QR).
  * [jsQRScan](https://blog.niap3d.com/fr/4,10,news-76-jsQRScan-scanner-un-code-QR-en-Javascript.html) : Scan de codes QR uniquement, basé sur QR Code Scanner de LazarSoft.
  * [JavaScript Barcode Scanner](http://www.webondevices.com/javascript-barcode-scanner/) : Scan de codes-barres uniquement.
* Intégration de la bibliothèque WebCodeCamJS dans la page de test.
  * Possibilité de scanner les codes QR et les codes-barres.
  * Testé sur iOS 11, le scan fonctionne mais la caméra dorsale n'est pas détectée (caméra frontale uniquement).
* [Mise en ligne de la page de test.](https://armanddelessert.github.io/apiTester/index.html)

4 heures


## Lundi 4 décembre 2017
* Ajout d'un lien dans les résultats de la recherche de produits par nom :
  * Utilisation d'`addEventListener()`.
    * Problème : La fonction est appelée à la déclaration et non lors du clic.
      * Non, c'est juste qu'on ne peut pas passer de paramètres à la fonction...
    * Problème : La fonction du `addEventListener` n'est pas appelée.
      * Ça fonctionne pourtant dans un fichier HTML tout simple...

2 heures


## Mercredi 29 novembre 2017
### Séance hebdomadaire
* Pour le problème d'affichage du JSON dans la page HTML :
  * Remplacer les caractères spéciaux ("`<`", "`>`", "`"`", etc.) par leurs entités HTML ("`&lsaquo;`", "`&rsaquo;`", "`&quot;`", etc.).
* Commencer le rapport dès cette semaine :
  * Noter les recherches sur les bibliothèques de scan de codes 1D/2D (codes-barres, codes QR).
  * Faire un comparatif des différentes bibliothèque de scan.
  * Quel est le type de code-barres utilisé ?
    * Il s'agit du **Code 128 bar** (indiqué par le code **`^BC`**) selon [la page d'aide](http://labelary.com/docs.html).

#### Pour la prochaine fois :
* Commencer le rapport.
* Continuer la recherche de bibliothèques JavaScript de scan de codes et comparer les différentes bibliothèques trouvées.
  * Choisir la plus adaptée (scan de codes codes-barres et codes QR, scan à la volée, mise en place facile, etc.).
  * Ajouter ce comparatif au rapport.
* Intégrer la bibliothèque de scan choisie dans la page HTML.
  * Si choix de 2 bibliothèques séparées pour chacun des types de codes (codes-barres, code QR), ajouter un bouton à la page HTML pour switcher de l'une à l'autre.
* Afficher les résultats de la recherche de produit par nom et pouvoir sélectionner un résultat.

### Travail sur le projet
* Inclusion du scan de codes QR dans la page de test.
* Test de mise en place du [JSON Server](https://github.com/typicode/json-server) pour les tests en local.
  * Problème avec l'installation de Node.js (pour npm).
* Début du rapport.

6 heures


## Mardi 28 novembre 2017
* Ajout de la recherche d'un produit par nom à l'API.
* Adaptation du code pour la nouvelle API.
* Amélioration de l'interface.

4 heures


## Lundi 27 novembre 2017
* Mise à jour de l'API.

2.5 heures


## Mercredi 22 novembre 2017
### Séance hebdomadaire
* Rechercher une bibliothèque JavaScript de scan de codes-barres et codes QR.
  * Voir du côté de [WebCodeCamJS](https://atandrastoth.co.uk/main/pages/plugins/webcodecamjs/), [andrastoth/webcodecamjs sur GitHub](https://github.com/andrastoth/webcodecamjs).

0.5 heure


## Mardi 21 novembre 2017
* Mise en place du scan de codes-barres et de codes QR.
  * Mise en place d'[une page de test](https://armanddelessert.github.io/).

5 heures


## Jeudi 16 novembre 2017
* Recherche de bibliothèques de scan de codes-barres et de codes QR en JavaScript :
  * Scan de codes-barres : [QuaggaJS](https://serratus.github.io/quaggaJS/),
[serratus/quaggaJS sur GitHub](https://serratus.github.io/quaggaJS/).
  * Scan de codes QR : [QR Code scanner](https://webqr.com/index.html),
[LazarSoft/jsqrcode sur GitHub](https://github.com/LazarSoft/jsqrcode) (ne fonctionne que sur une image fixe, pas avec la caméra ?).
  * Scan de codes QR : [Instascan](https://schmich.github.io/instascan/),
[schmich/instascan sur GitHub](https://github.com/schmich/instascan).

2 heures


## Mercredi 15 novembre 2017
### Séance hebdomadaire
* Grosse phase de débug :
  * Problème de redirection sur un page présentant l'erreur "*Unhandled request. Did you select a folder to serve?*" lors de l'appuis sur le bouton *Sign in* :
    * L'erreur était provoquée par la présence des balises `<form>` et `</form>` dans le HTML.
  * Problème de "*Blocage d’une requête multiorigines (Cross-Origin Request)*" lors de l'accès à l'API :
    * Le serveur doit ajouter une information sur les domaines dont il s'attend à recevoir des requêtes dans l'en-tête des réponses HTTP qu'il envoi. Pour autoriser tous les domaines, il faut ajouter `Access-Control-Allow-Origin: *` dans l'en-tête des réponses HTTP envoyées par le serveur.
    * L'extension pour Google Chrome [](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?utm_source=chrome-app-launcher-info-dialog) permet de s'affranchir de ce problème en ajoutant automatiquement le champ `Access-Control-Allow-Origin: *` dans l'en-tête des paquets HTTP reçus.

#### Pour la prochaine fois :
* Finir les requêtes XHR
  * Changer les URL et utiliser mock.io ou mockable.io.
  * Récupération et affichage des réponses.
* Commencer le scan du code-barres :
  * Il y a et des codes à barres, et des codes QR.
  * Les codes ne contiennent que l'ID du produit (juste un nombre).
  * Demander à Christophe des exemples de codes (photos).
    * Mettre le prof en copie des emails.

#### La suite du projet :
* Implémenter le scan du code-barres (important pour le PA !).
  * À commencer à tester en parallèle.
  * Voir le support de Web RTC sur iOS 11.
* Intégration de la web app dans la PWA.

### Travail sur le projet
* Continué l'implémentation des requêtes XHR :
  * La recherche d'un produit par son ID fonctionne.
  * La recherche d'un produit par son nom (ne fonctionne pas pour "dell"...).

3 heures


## Mardi 14 novembre 2017
* Continué la communication avec l'API de l'inventaire.
  * Pour le passage de paramètres à la fonction de callback, changer `xhr.onreadystatechange = callback(xhr);` en `xhr.onreadystatechange = function() { callback(xhr); }`.
* Il est possible d'envoyer les requêtes de login, d'affichage, d'emprunt, et de retour de matériel.
    * Reste un bug redirigeant sur le message d'erreur "Unhandled request. Did you select a folder to serve?" après l'envoi de la requête de login.

6 heures


## Lundi 13 novembre 2017
* Débug de l'envoi des requêtes XHR...
  * D'après M. Grunenvald, le problème peut provenir du fait que le fichier HTML est accédé depuis le gestionnaire de fichiers (protocole `file://`). Effectivement, le problème disparaît lors de l'accès au fichier HTML via un serveur local (protocole `http://`).
    * Mise à jour du post ["XHR status undefined" sur StackOverflow](https://stackoverflow.com/questions/47191673/xhr-status-undefined).

2 heures


## Dimanche 12 novembre 2017
* Débug de l'envoi des requêtes XHR...
  * Le problème vient du [Contrôle d'accès HTTP](https://developer.mozilla.org/fr/docs/HTTP/Access_control_CORS).
  * Cependant, l'ajout de `Access-Control-Allow-Origin : *`, sensé autoriser n'importe quelle source, n'est pas pris en compte.

5 heures


## Vendredi 10 novembre 2017
* Débug de l'envoi des requêtes XHR...
  * Toujours le problème du statut `xhr.readyState` qui passe bien à `4` mais le code HTTP reste indéfini...
  * Voir le post ["XHR status undefined" du 10 novembre sur StackOverflow](https://stackoverflow.com/revisions/47191673/3).

2 heures


## Mercredi 8 novembre 2017
### Séance hebdomadaire
* Pour les requêtes REST, 3 possibilités :
  * Utiliser les requêtes XHR comme déjà commencé
  * Utiliser XHR avec jQuerry
  * Utiliser [l'API Fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API) (nouveau standard)
* Suivre [le tuto sur AJAX sur W3Schools](https://www.w3schools.com/xml/ajax_intro.asp).
  * Voir également la page sur le [XML HttpRequest (XHR)](https://www.w3schools.com/xml/xml_http.asp).

#### Objectifs pour la semaine prochaine :
* Finir les requêtes AJAX / XHR sur l'API
  * Utiliser l'API Fetch qui est le futur standard ?
* Commencer la suite !

#### La suite du projet :
* Implémenter la recherche d'un appareil.
* Implémenter le scan du code-barres (important pour le PA !).
  * À commencer à tester en parallèle.
  * Voir le support de Web RTC sur iOS 11.
* Intégration de la web app dans la PWA.

### Travail sur le projet
* Débug de l'envoi des requêtes XHR :
  * Le statut `xhr.readyState` passe bien à `4` mais le code HTTP reste indéfini...

5 heures


## Mardi 7 novembre 2017
* Continué l'implémentation de l'authentification dans le boilerplate.
* Début d'implémentation des autres requêtes (affichage des détails, emprunt, retour)
  * Utilisation de l'API [mockable.io](https://www.mockable.io/).

4 heures


## Dimanche 5 novembre 2017
* Choix du _boilerplate_ [HTML5 Boilerplate](https://html5boilerplate.com/).
  * Utilisation d'[Initializr](https://etudiants-caweb.u-strasbg.fr/1415/schnoerringer/projetm2/index.php?page=boilerplate&css=css3) pour la personnalisation du template.
  * Début d'implémentation du login dans le boilerplate choisi.
* API REST :
  * Ajout de requêtes REST pour le login à l'API sur [mockable.io](https://www.mockable.io/).
  * Test de l'API avec [	API Tester](https://apitester.com/).

4 heures


## Mercredi 1er novembre 2017
* Mock de l'API REST sur [mockable.io](https://www.mockable.io/) :
  * [Test de récupération des détails d'un produit.](http://demo6654639.mockable.io/api/rest/%3Ctoken%3E/products/0/details)

1 heure


## Mardi 31 octobre 2017
* Le boilerplate [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/) de Google [n'est plus maintenu](https://github.com/google/web-starter-kit/issues/958).
  * [Workbox](https://workboxjs.org/) comme remplaçant ?

1 heure


## Lundi 30 octobre 2017
### Séance hebdomadaire
* La spécification de l'API proposée est bonne.
  * Manque la recherche d'un produit par son nom.
* Essayer de tester l'API développée sur la version 2.0 de Swagger.
* Maquette wireframe de l'interface (représentation des éléments de l'interface sans implication sur la mise en forme de l'interface).
* Fixer l'/les objectif(s) pour la semaine prochaine par email mardi 31.

### Travail sur le projet
* Test de l'API REST existante :
  * Réussite de connexion à l'API REST existante !
    * Via l'URL suivante (sur le domaine de dev, mot de passe transmis en clair) :
      > `https://inventory-dev.ing.he-arc.ch/api/login/devweb.user/123456`
    * Réponse reçue :
      > `{"success":true,"message":"OK","result":"gnDxk2014iQR41udQ252W17fsyPJHnvgRWAc306lyF10gevWZq"}`
  * Test avec succès de recherche d'un produit à partir de son ID :
    > `https://inventory-dev.ing.he-arc.ch/api/rest/gnDx…vWZq/Product/searchById?productId=215`
  * Test avec succès de la recherche par mots-clés sur la requête `Nokia Lumia 920` :
    > `https://inventory-dev.ing.he-arc.ch/api/rest/gnDx…vWZq/Product/search?term=Nokia+Lumia+920`
  * Essai d'emprunt de matériel, sans succès :
    > `https://inventory-dev.ing.he-arc.ch/api/rest/gnDx…vWZq/Product/loan?productId=215&beginDate=01.01.2018&endDate=02.01.2018&comment="Test%20de%20l%27API%20REST"`
  * Réponse reçue :
    > `{"success":true,"message":"success","result":{"loan":false,"message":"You can not loan a product for this user"}}`

4 heures


## Dimanche 29 octobre 2017
* Fin du tutoriel [RESTful Web Services Tutorial](https://www.tutorialspoint.com/restful/index.htm).
* [Spécification d'une nouvelle API REST](https://github.com/HE-Arc/Inventory-HE-Arc-Web-App/blob/master/doc/Sp%C3%A9cification%20API%20REST.md).
* Recherche d'outil pour le développement d'API REST :
  * Outils de développement :
    * [Postman](https://www.getpostman.com/)
    * [deployd](http://deployd.com/)
    * [Insomnia](https://insomnia.rest/)
    * [apiary](https://apiary.io/)
    * [Swagger](https://swagger.io/)
  * Outil de test :
    * [Mocky](https://www.mocky.io/) : Générateur de réponses HTTP pour le test de client REST.
* Essai de modélisation de l'API [sur Swagger](https://app.swaggerhub.com/apis/ArmandD/Inventory-HE-Arc-Web-App/1.0.0). Pas trouvé comment tester l'API modélisée, [les explications n'étant pas claires (ou périmées)](https://app.swaggerhub.com/help/integrations/api-auto-mocking).

6 heures


## Vendredi 27 octobre 2017
* Test de l'API REST avec l'outil en ligne [API Tester](https://apitester.com/).
  * Impossible pour l'outil de se connecter à `inventory-dev.ing.he-arc.ch`. Nécessiterait de passer par le VPN de l'école.
* Suivi quelques tutoriels :
  * Tutoriel vidéo "[What Is REST?](http://www.restapitutorial.com/lessons/whatisrest.html)".
  * [RESTful Web Services Tutorial](https://www.tutorialspoint.com/restful/index.htm) :
    * Jusqu'à [Addressing](https://www.tutorialspoint.com/restful/restful_addressing.htm).
  * [Consuming a RESTful Web Service with jQuery](https://spring.io/guides/gs/consuming-rest-jquery/).
* Commencé une spécification d'une nouvelle API REST.

4 heures


## Jeudi 26 octobre 2017
* Test de l'API.
  * Requêtes à l'API REST :
    * Authentification :
      > `https://inventory-dev.ing.he-arc.ch/api/login/devweb.user/a7c1b7be279b2e785430d67c522446449da3fcea`
    * Requête pour l'interrogation de la base de données :
      > `https://inventory-dev.ing.he-arc.ch/api/rest/<token>/<class>/<method>?<params>`
  * **Le hash MD5 du mot de passe ne fonctionne pas, impossible de se connecter à l'API REST.**

2 heures


## Lundi 16 octobre 2017
### Séance hebdomadaire
* Objectifs pour la prochaine fois :
  * Tester la vrai API REST (voir la doc dans le docx).
  * Déterminer si elle suffit ou s'il faut en spécifier une nouvelle.
  * Choisir un boilerplate, les framework (?), trouver un tuto en relation avec ces outils (pour un démarrage du projet plus rapide).
  * Mettre à jour ce journal de travail.
  * **Contacter le prof en cas de souci !**
  * **Voir notes OneNote.**

1 heure


## Dimanche 15 octobre 2017
* Mise à jour du journal de travail.

1 heure


## Samedi 14 octobre 2017
* Étude du code du [portail web de l'inventaire](https://inventory-dev.ing.he-arc.ch/product/show/215) (pour faire un emprunt).
  * Le portail web existant n'est pas totalement en [REST](https://www.wikiwand.com/fr/Representational_state_transfer#/Contraintes).
    * Un coockie de session doit être stocké du côté du serveur lors du login (enfreint la contrainte d'un serveur stateless).

3 heures


## Vendredi 13 octobre 2017
* Commencé un [Tutoriel sur le JavaScript](https://openclassrooms.com/courses/tout-sur-le-javascript).
  * Jusqu'à la [partie 3 _Les variables_](https://openclassrooms.com/courses/tout-sur-le-javascript/les-variables-5).
* Test de l'"API" du [portail web de l'inventaire](https://inventory-dev.ing.he-arc.ch/) :
  * Analyse du code du site web.
  * Essai d'implémentation d'un emprunt de matériel.
    * Pas encore réussi.

4 heures


## Jeudi 12 octobre 2017
* Fin du [tutoriel PWA](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/).
  * _Support native integration_ :
    * Ajout du fichier `manifest.json`, de l'icône et des codes spécifiques aux plates-formes (iOS et Windows) pour permettre une intégration native de l'application.
  * _Deploy to a secure host and celebrate_ :
    * Déploiement de l'application PWA sur [Firebase](https://firebase.google.com/), un hébergeur de site web statique.

1.5 heure


## Mercredi 11 octobre 2017
* [Tutoriel PWA](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/).

1.5 heure


## Lundi 9 octobre 2017
### Séance hebdomadaire
* Objectifs pour la prochaine fois :
  * Finir le tutoriel.
  * Maquette de l'interface graphique.
  * Tester l'API du portail web.
  * Choix du boilerplate :
    * ["Web Starter Kit" de Google](https://github.com/google/web-starter-kit) ?
    * Attention à justifier le choix ! Comparer avec [d'autres boilerplates](https://hnpwa.com/).

### Travail sur le projet
* Mockup de l'interface ?

1 heure


## Dimanche 8 octobre 2017
* Mise à jour du journal de travail.

1 heure


## Vendredi 6 octobre 2017
* Avancé le [tutoriel PWA](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/) jusqu'à [_Making the requests_](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#making_the_requests) (non compris).
  * _Start with a fast first load_ :
    * Récupérer des données dès le premier démarrage afin que la web app soit immédiatement utilisable.
  * _Use service workers to pre-cache the App Shell_ :
    * Mettre en cache les éléments de l'interface (HTML, CSS, images, etc.).
    * Application d'une stratégie [cache-first](https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network).
  * _Use service workers to cache the forecast data_ :
    * Utiliser une stratégie [cache-first-then-network](https://jakearchibald.com/2014/offline-cookbook/#cache-network-race).

6 heures


## Lundi 2 octobre 2017
### Objectifs
* Détailler la liste des tâches (à partir des fonctionnalités du cahier des charges).
* Faire le planning (diviser les tâches trop complexes) :
  * Ajouter aux tâches les phases d'apprentissage et test.
  * Planifier des millestones tout au long du projet.
  * Utiliser un outil de gestion des tâches ([Trello](https://trello.com/) ou outil intégré à GitHub) ?
* Détailler les specs, continuer la recherche et documentation sur les frameworks, boilerplate, etc.
* Faire un tutoriel pour prendre en mains les outils.

### Séance hebdomadaire
* Présentation du planning, petites modifications.

### Travail sur le projet
* [Planning du projet](https://github.com/HE-Arc/Inventory-HE-Arc-Web-App/blob/master/doc/Planning.png).
* Lecture de la doc sur l'API.
* Parcours de la structure de la base de données (dump de la BdD).
* Test des emprunts sur [la page de l'inventaire de test](https://inventory-dev.ing.he-arc.ch/).

5 heures


## Dimanche 1er octobre
* Commencé le planning du projet.

1 heure


## Lundi 25 septembre 2017
### Objectifs
* Rédiger le cahier des charges.
* Rechercher les frameworks qui seront utilisés.

### Séance hebdomadaire
* Modification et validation du cahier des charges.
* [HNPWA](https://hnpwa.com/) : Comparaison de frameworks pour le développement de PWA.

### Travail sur le projet
* Continué le [tutoriel sur le développement de PWA](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/) :
  * Téléchargement et mise en place du projet d'exemple.
  * Lecture du code de base.
  * Avancé le tutoriel PWA jusqu'à [_Start with a fast first load_](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/#start_with_a_fast_first_load) (non compris).
* Test du boilerplate ["Web Starter Kit" de Google](https://github.com/google/web-starter-kit).

3 heures


## Dimanche 24 septembre 2017
* Rédaction du [cahier des charges](https://github.com/HE-Arc/Inventory-HE-Arc-Web-App/blob/master/doc/Cahier%20des%20charges.md).
* Lecture des documents fournis.
* Recherche de frameworks, documentation.
* Commencé un [tutoriel sur le développement de PWA](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/) :
  * Lecture de l'introduction.
* Mise à jour du journal de travail.

5 heures


## Mercredi 20 septembre 2017
### Séance hebdomadaire
* Définition des objectifs/fonctionnalités :
  * Effectuer un emprunt de matériel
  * Enregistrer un retour de matériel
  * Afficher les détails d'un appareil
  * Rechercher un appareil
  * Lecture d'un code-barres et de QR codes (objectif prioritaire)
* Matériel/documentation fournie :
  * Documentation de l'API ?
  * Base de données de test (structure des tables, données d'exemple) ?
  * Présentation PowerPoint, information utilisateur
* Essayer un emprunt d'un appareil depuis le [portail de développement](https://inventory-dev.ing.he-arc.ch/). Logins (mot de passe : `123456`) :
  * `devweb.user`
  * `devweb.manager`
  * `devweb.admin`
* Suggestions d'outils :
  * Frameworks pour le développement de PWA ([Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)) :
    * [Angular](https://angularjs.org/), [React](https://facebook.github.io/react/), [Bootstrap](http://getbootstrap.com/) ?
  * Framework pour le développement d'une app mobile :
    * [Ionic](https://ionicframework.com/) (basé sur Angular)
  * Déploiement du backend pour les test :
    * [Sandbox](https://getsandbox.com/), [ngrok](https://ngrok.com/)
  * Développement de l'API ([lien 1](https://www.google.ch/search?q=stub+api), [lien 2](https://www.google.ch/search?q=mock+api)) :
    * [mockable.io](https://www.mockable.io/), [Mocky](http://www.mocky.io/)
* Partir d'un [_boilerplate_](https://www.wikiwand.com/en/Boilerplate_code) pour le développement.

### Travail sur le projet
* Création du dépôt du projet sur le [GitHub de l'HE-Arc](https://github.com/HE-Arc/Inventory-HE-Arc-Web-App).
* Recherche de frameworks web :
  * [Introduction aux frameworks front-end (Bootstrap, Foundation)](https://www.alticreation.com/bootstrap-foundation-frameworks-front-end/)
  * [20 Frameworks Front-end pour vos créations web](https://www.codeur.com/blog/front-end-framework/)
  * [Top 10 Front-End Frameworks of 2016](https://www.keycdn.com/blog/front-end-frameworks/)
  * [The most popular JavaScript front-end tools](https://techbeacon.com/most-popular-javascript-front-end-tools)
* Développement de PWA :
  * [The 5 best tools for building progressive web apps fast](https://techbeacon.com/5-best-tools-building-progressive-web-apps-fast)

3 heures