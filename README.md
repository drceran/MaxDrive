# CarCar
![CarCar picture](2023-04-26-16-20-15.png)


CarCar provides car dealerships with the ability to easily manage their inventory, sales, customers, and services!

## Team:

* Person 1 - Jennifer Ho - Services
* Person 2 - Esra Ceran - Sales

## Design
Add in the DDD graphic
Include a couple of sentences describing how they work together
### Pre-requisites
Ensure you have the latest version of docker on your Docker host machine.
### Installation Guidance
Fork the project and clone locally to your Docker host.

To run this project, :

```
$ ...
```


## Inventory microservice

### RESTful Endpoints
#### Manufacturers
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8100/api/manufacturers/ | List manufacturers |
|`POST`| http://localhost:8100/api/manufacturers/ | Create a manufacturer |
|`GET`| http://localhost:8100/api/manufacturers/:id/ | Get a specific manufacturer |
|`PUT`| http://localhost:8100/api/manufacturers/:id/ | Update a specific manufacturer |
|`DELETE`| http://localhost:8100/api/manufacturers/:id/ | Delete a specific manufacturer |

#### Vehicle Models
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8100/api/models/ | List vehicle models |
|`POST`| http://localhost:8100/api/models/ | Create a vehicle model |
|`GET`| http://localhost:8100/api/models/:id/ | Get a specific vehicle model |
|`PUT`| http://localhost:8100/api/models/:id/ | Update a specific vehicle model |
|`DELETE`| http://localhost:8100/api/models/:id/ | Delete a specific vehicle model |

#### Automobiles
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8100/api/automobiles/ | List automobiles |
|`POST`| http://localhost:8100/api/automobiles/ | Create an automobile |
|`GET`| http://localhost:8100/api/automobiles/:vin/ | Get a specific automobile |
|`PUT`| http://localhost:8100/api/automobiles/:vin/ | Update a specific automobile |
|`DELETE`| http://localhost:8100/api/automobiles/:vin/ | Delete a specific automobile |

## Service microservice

Explain your models and integration with the inventory
microservice, here.

### RESTful Endpoints
#### Technicians
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8080/api/technicians/ | List technicians |
|`POST`| http://localhost:8080/api/technicians/ | Create a technician |
|`DELETE`| http://localhost:8080/api/technicians/:id | Delete a specific technician |

#### Appointments
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8080/api/appointments/ | List appointments |
|`POST`| http://localhost:8080/api/appointments/ | Create an appointment |
|`DELETE`| http://localhost:8080/api/appointments/:id | Delete an appointment |
|`PUT`| http://localhost:8080/api/appointments/:id/cancel| Set appointment status to canceled |
|`PUT`| http://localhost:8080/api/appointments/:id/finish | Set appointment status to finished |

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

### RESTful Endpoints
#### Salespersons
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8090/api/salespeople/ | List salespersons |
|`POST`| http://localhost:8090/api/salespeople/ | Create a salespeople |
|`DELETE`| http://localhost:8090/api/salespeople/:id | Delete a specific salesperson |

#### Customers
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8090/api/customers/ | List customers |
|`POST`| http://localhost:8090/api/customers/ | Create a customer |
|`DELETE`| http://localhost:8090/api/customers/:id | Delete a specific customer |

#### Sales
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8090/api/sales/ | List sales |
|`POST`| http://localhost:8090/api/sales/ | Create a sale |
|`DELETE`| http://localhost:8090/api/sales/:id | Delete a sale |
