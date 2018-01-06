# Spécification de l'API REST


## Authentification
### Méthode HTTP
`GET`

### URL
    https://inventory-dev.ing.he-arc.ch/api/login/<username>/<md5_password>/

#### Paramètres
* `<username>` : Nom d'utilisateur
* `<md5_password>` : Hash MD5 du mot de passe

### Réponse JSON
    {
      "success": true,
      "username": "<username>",
      "token": "<token>"
    }

## Affichage d'un produit
### Méthode HTTP
`GET`

### URL
    https://inventory-dev.ing.he-arc.ch/api/rest/<token>/products/<id>/details/

#### Paramètres
* `<token>` : Token d'authentification de la session
* `<id>` : ID du produit

### Réponse JSON
    {
      "success": true,
      "product": {
        "id": 1,
        "name": "<Product name>",
        "description": "<Product description>",
        "is_loan": true/false,
        "loan": {
          "begin_date": "yyyy.mm.dd",
          "end_date": "yyyy.mm.dd"
        }
      }
    }

## Emprunt d'un produit
### Méthode HTTP
`PUT`

### URL
    https://inventory-dev.ing.he-arc.ch/api/rest/<token>/products/<id>/loan/<begin_date>/<end_date>/

#### Paramètres
* `<token>` : Token d'authentification de la session
* `<id>` : ID du produit
* `<begin_date>` : Date de début de l'emprunt
* `<end_date>`: Date de fin de l'emprunt

### Réponse JSON
    {
      "success": true
    }

## Retour d'un produit
### Méthode HTTP
`PUT`

### URL
    https://inventory-dev.ing.he-arc.ch/api/rest/<token>/products/<id>/return/

#### Paramètres
* `<token>` : Token d'authentification de la session
* `<id>` : ID du produit

### Réponse JSON
    {
      "success": true
    }

## Recherche d'un produit
### Méthode HTTP
`GET`

### URL
    https://inventory-dev.ing.he-arc.ch/api/rest/<token>/search/<term>/

#### Paramètres
* `<token>` : Token d'authentification de la session
* `<term>` : Terme(s) recherché(s)

### Réponse JSON
    {
      "success": true,
      "number_results": 3,
      "results": [
        {…},
        {…},
        {…}
      ]
    }

## Récupérer tous les emprunts de l'utilisateur
### Méthode HTTP
`GET`

### URL
    https://inventory-dev.ing.he-arc.ch/api/rest/<token>/<user>/loans/

#### Paramètres
* `<token>` : Token d'authentification de la session
* `<user>` : Nom de l'utilisateur

### Réponse JSON
    {
      "success": true,
      "number_results": 3,
      "results": [
        {…},
        {…},
        {…}
      ]
    }

## Message d'erreur du serveur
Lorsque les paramètres sont incorrects, par exemple l'ID du produit renseigné n'existe pas, le serveur retourne un message d'erreur.

### Réponse JSON
    {
      "success": false,
      "error": "<Error description>"
    }