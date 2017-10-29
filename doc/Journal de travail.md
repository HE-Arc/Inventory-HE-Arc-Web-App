# Journal de travail


## Dimanche 29 octobre 2017
* Fin du tutoriel [RESTful Web Services Tutorial](https://www.tutorialspoint.com/restful/index.htm).
* [Spécification d'une nouvelle API REST](https://github.com/HE-Arc/Inventory-HE-Arc-Web-App/blob/master/doc/Sp%C3%A9cification%20API%20REST.md).

4 heures


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

## Dimanche 9 octobre 2017
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
  * Lecture d'un code à barres et de QR codes (objectif prioritaire)
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