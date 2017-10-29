# Spécification de l'API REST


## Représentation des données

### Matériel
#### Format XML
    <product>
      <id>1</id>
      <name>ProductName</name>
    </product>

#### Format JSON
    {
      "id": 1,
      "name": "ProductName"
    }

### Emprunt de matériel
#### Format XML
    <loan>
      <product_id>1</product_id>
      <begin_date>"01.01.2001"</begin_date>
      <end_date>"01.01.2001"</end_date>
    </loan>

#### Format JSON
    {
      "product_id": 1,
      "begin_date": "01.01.2001"
      "end_date": "01.01.2001"
    }

### Retour de matériel
#### Format XML
    <return>
      <product_id>1</product_id>
      <return_date>"01.01.2001"</return_date>
    </return>

#### Format JSON
    {
      "product_id": 1,
      "return_date": "01.01.2001"
    }


## URI

### Accès à un produit
#### Méthode HTTP
`GET`

#### URL
    https://inventory-dev.ing.he-arc.ch/api/rest/<token>/products/<id>/details

### Emprunt d'un matériel
#### Méthode HTTP
`PUT`

#### URL
    https://inventory-dev.ing.he-arc.ch/api/rest/<token>/products/<id>/loan

### Retour d'un matériel
#### Méthode HTTP
`PUT`

#### URL
    https://inventory-dev.ing.he-arc.ch/api/rest/<token>/products/<id>/return