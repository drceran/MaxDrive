# CarCar
![CarCar picture](2023-04-26-16-20-15.png)


CarCar provides car dealerships with the ability to easily manage their inventory, service center, and sales!
Note to self: Move all endpoint URLs to design section?

## Team:

* Person 1 - Jennifer Ho - Services
* Person 2 - Esra Ceran - Sales

## Table of Contents
- [Design](#design)
- [Installation](#installation)
- [Inventory Microservice](#inventory-microservice)
- [Service Microservice](#sales-microservice)
- [Sales Microservice](#service-microservice)

## Design
### Domain-Driven Architecture
Add in the DDD graphic
Include a couple of sentences describing how they work together


### URLs and Ports Summary
| Service | URL | Port |
|---|---|---|
| Frontend - React | http://localhost:3000 | 3000 |
| Backend - Inventory API | http://localhost:8100 | 8000 |
| Backend - Service API | http://localhost:8080 | 8000 |
| Backend - Sales API | http://localhost:8090 | 8000 |

## Installation
### Pre-requisites
Ensure you have the latest version of docker on your Docker host machine.

### Quick Start
Fork the project and clone locally to your Docker host.

To run this project:

```
$ ...
```


## Inventory Microservice

### RESTful Endpoints
#### Manufacturers
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8100/api/manufacturers/ | List manufacturers |
|`POST`| http://localhost:8100/api/manufacturers/ | Create a manufacturer |
|`GET`| http://localhost:8100/api/manufacturers/:id/ | Get a specific manufacturer's detail |
|`PUT`| http://localhost:8100/api/manufacturers/:id/ | Update a specific manufacturer |
|`DELETE`| http://localhost:8100/api/manufacturers/:id/ | Delete a specific manufacturer |

<details>
<summary><strong>Example GET Outputs</strong></summary>
##### List manufacturers:
```
{
	"manufacturers": [
		{
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "BMW"
		}
	]
}
```
##### Get a specific manufacturer's detail:
```
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "BMW"
}
```

<details>
<summary><strong>Example POST / PUT Inputs and Outputs</strong></summary>
##### Input:
```
{
  "name": "BMW"
}
```

##### Output:
```
{
	"href": "/api/manufacturers/1/",
	"id": 1,
	"name": "BMW"
}
```

<details>
<summary><strong>Example Delete Output</strong></summary>
##### Delete a specific manufacturer:
```
{
	"id": null,
	"name": "BMW"
}
```
#### Vehicle Models
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8100/api/models/ | List vehicle models |
|`POST`| http://localhost:8100/api/models/ | Get a vehicle model |
|`GET`| http://localhost:8100/api/models/:id/ | Show a specific vehicle model's detail |
|`PUT`| http://localhost:8100/api/models/:id/ | Update a specific vehicle model |
|`DELETE`| http://localhost:8100/api/models/:id/ | Delete a specific vehicle model |

<details>
<summary><strong>Example GET Outputs</strong></summary>
##### List vehicle models:
```
{
	"models": [
		{
			"href": "/api/models/8/",
			"id": 8,
			"name": "M5",
			"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
			"manufacturer": {
				"href": "/api/manufacturers/3/",
				"id": 3,
				"name": "BMW"
			}
		}
	]
}
```
##### Get a specific vehicle model's detail:
```
{
	"href": "/api/models/8/",
	"id": 1,
	"name": "M5",
	"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
	"manufacturer": {
		"href": "/api/manufacturers/3/",
		"id": 1,
		"name": "BMW"
	}
}
```

<details>
<summary><strong>Example POST / PUT Inputs and Outputs</strong></summary>
##### Input:
```
{
  "name": "M5",
  "picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
  "manufacturer_id": 1
}
```

##### Output:
```
{
	"href": "/api/models/1/",
	"id": 1,
	"name": "M5",
	"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
	"manufacturer": {
		"href": "/api/manufacturers/1/",
		"id": 1,
		"name": "BMW"
	}
}
```

<details>
<summary><strong>Example Delete Output</strong></summary>
##### Delete a specific vehicle model:
```
{
	"id": null,
	"name": "M5",
	"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
	"manufacturer": {
		"href": "/api/manufacturers/3/",
		"id": 1,
		"name": "BMW"
	}
}
```

#### Automobiles
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8100/api/automobiles/ | List automobiles |
|`POST`| http://localhost:8100/api/automobiles/ | Create an automobile |
|`GET`| http://localhost:8100/api/automobiles/:vin/ | Get a specific automobile's detail |
|`PUT`| http://localhost:8100/api/automobiles/:vin/ | Update a specific automobile |
|`DELETE`| http://localhost:8100/api/automobiles/:vin/ | Delete a specific automobile |

<details>
<summary><strong>Example GET Outputs</strong></summary>
##### List vehicle models:
```
{
	"models": [
		{
			"href": "/api/models/8/",
			"id": 8,
			"name": "M5",
			"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
			"manufacturer": {
				"href": "/api/manufacturers/3/",
				"id": 3,
				"name": "BMW"
			}
		}
	]
}
```
##### Get a specific automobile's detail:
```
{
	"href": "/api/models/8/",
	"id": 1,
	"name": "M5",
	"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
	"manufacturer": {
		"href": "/api/manufacturers/3/",
		"id": 1,
		"name": "BMW"
	}
}
```

<details>
<summary><strong>Example POST / PUT Inputs and Outputs</strong></summary>
##### Input:
```
{
  "name": "M5",
  "picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
  "manufacturer_id": 1
}
```

##### Output:
```
{
	"href": "/api/models/1/",
	"id": 1,
	"name": "M5",
	"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
	"manufacturer": {
		"href": "/api/manufacturers/1/",
		"id": 1,
		"name": "BMW"
	}
}
```

<details>
<summary><strong>Example Delete Output</strong></summary>
##### Delete a specific vehicle model:
```
{
	"id": null,
	"name": "M5",
	"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
	"manufacturer": {
		"href": "/api/manufacturers/3/",
		"id": 1,
		"name": "BMW"
	}
}
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
