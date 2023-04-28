![CarCar picture](carcar_mainpage.png)
# CarCar

CarCar provides car dealerships with the ability to easily manage their inventory, service center, and sales!

## Team:

* Person 1 - Jennifer Ho - Services
* Person 2 - Esra Ceran - Sales

## Table of Contents
- [Design](#design)
- [Installation](#installation)
- [Inventory Microservice](#inventory-microservice)
- [Service Microservice](#service-microservice)
- [Sales Microservice](#sales-microservice)

## Design
### Domain-Driven Architecture
CarCar is a web application that is design to manage an automobile dealership. It allows users to track their inventory, sales and car services. There are three amicroservices in this project: 1. inventory, 2.services, 3. sale. These microservices utilize RESTful API in the backend. In the user interface data is being displayed dynamically and allows users to interact with the application. Both sale and service microservices have their own AutomobileVO (Automobile value object) which is created and updated through their own poll application. In this way, sale and service microservices are able to request and get Automobile data from the Inventory microservice. A visual explanation of the project is presented in the below diagram.
![Diagram for the project](CarCar_diagram.png)


### URLs and Ports Summary
| Service | URL | Port |
|---|---|---|
| Frontend - React | http://localhost:3000/ | 3000 |
| Backend - Inventory API | http://localhost:8100/ | 8000 |
| Backend - Service API | http://localhost:8080/ | 8000 |
| Backend - Sales API | http://localhost:8090/ | 8000 |

### General URL Navigation
##### Manufacturers:
| Feature | URL |
|---|---|
|Manufacturers list|http://localhost:3000/manufacturers/|
|Add a manufacturer|http://localhost:3000/manufacturers/new/|

##### Vehicles:
| Feature | URL |
|---|---|
|Vehicle models list|http://localhost:3000/vehicles/|
|Add a vehicle model|http://localhost:3000/vehicles/new/|
##### Automobiles:
| Feature | URL |
|---|---|
|Automobiles list|http://localhost:3000/automobiles/|
|Add an automobile|http://localhost:3000/automobiles/new/|

##### Technicians:
| Feature | URL |
|---|---|
|Technicians list|http://localhost:3000/technicians/|
|Add a technician |http://localhost:3000/technicians/new/|

##### Appointments:
| Feature | URL |
|---|---|
|Appointments list|http://localhost:3000/appointments/|
|Add an appointment|http://localhost:3000/appointments/new/|
|Service appointment history|http://localhost:3000/appointments/history/|

##### Salespersons:
| Feature | URL |
|---|---|
|Salespeople list|http://localhost:3000/salespeople/|
|Add a salespeople |http://localhost:3000/salespeople/new/|

##### Customers:
| Feature | URL |
|---|---|
|Customers list|http://localhost:3000/customers/|
|Add a customer |http://localhost:3000/customers/new/|

##### Sales:
| Feature | URL |
|---|---|
|Technicians list|http://localhost:3000/sales/|
|Add a sale |http://localhost:3000/sales/new/|
|Salesperson history|http://localhost:3000/sales/history/


## Installation
### Pre-requisites
Ensure you have the latest version of Docker on your Docker host machine.

### Quick Start
Fork the project and clone locally to your Docker host.
```
git clone https://gitlab.com/esraceran/project-beta.git
```

Change your working directory to the project's directory.
```
cd project-beta
```

Pop open Docker Desktop if it's not running already and execute the following commands:
```
docker volume create beta-data
docker compose build
docker compose up
```

Check Docker to confirm that all the containers are up and running.

Once you've confirmed the Docker containers are running, access the application on your browser at http://localhost:3000/!


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
</details>

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
</details>

<details>
<summary><strong>Example Delete Output</strong></summary>

##### Delete a specific manufacturer:
```
{
	"id": null,
	"name": "BMW"
}
```
</details>

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
</details>

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
</details>
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
</details>

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

##### List automobiles:
```
{
	"autos": [
		{
			"href": "/api/automobiles/WBSFV9C5XDD096380/",
			"id": 1,
			"color": "Moonstone Metallic",
			"year": 2013,
			"vin": "WBSFV9C5XDD096380",
			"model": {
				"href": "/api/models/1/",
				"id": 1,
				"name": "M5",
				"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
				"manufacturer": {
					"href": "/api/manufacturers/1/",
					"id": 1,
					"name": "BMW"
				}
			},
			"sold": false
		}
	]
}
```
##### Get a specific automobile's detail:
```
{
	"href": "/api/automobiles/WBSFV9C5XDD096380/",
	"id": 2,
	"color": "Moonstone Metallic",
	"year": 2013,
	"vin": "WBSFV9C5XDD096380",
	"model": {
		"href": "/api/models/8/",
		"id": 8,
		"name": "M5",
		"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
		"manufacturer": {
			"href": "/api/manufacturers/3/",
			"id": 3,
			"name": "BMW"
		}
	},
	"sold": false
}
```
</details>

<details>
<summary><strong>Example POST / PUT Inputs and Outputs</strong></summary>

##### Input:
```
{
  "color": "Moonstone Metallic",
  "year": 2013,
  "vin": "WBSFV9C5XDD096380",
  "model_id": 1
}
```

##### Output:
```
{
	"href": "/api/automobiles/WBSFV9C5XDD096380/",
	"id": 1,
	"color": "Moonstone Metallic",
	"year": 2013,
	"vin": "WBSFV9C5XDD096380",
	"model": {
		"href": "/api/models/1/",
		"id": 1,
		"name": "M5",
		"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "BMW"
		}
	},
	"sold": false
}
```
</details>

<details>
<summary><strong>Example Delete Output</strong></summary>

##### Delete a specific vehicle model:
```
{
	"href": "/api/automobiles/WBSFV9C5XDD096380/",
	"id": null,
	"color": "Moonstone Metallic",
	"year": 2013,
	"vin": "WBSFV9C5XDD096380",
	"model": {
		"href": "/api/models/1/",
		"id": 1,
		"name": "M5",
		"picture_url": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F52c644c6-17c6-11ed-98b9-ae8775f5f43c.jpg?crop=4412%2C2482%2C1490%2C1396&resize=1500",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "BMW"
		}
	},
	"sold": false
}
```
</details>

## Service microservice
The Service microservice contains two applications "Api" and "Poll".

Api includes most of the back-end functionality for the Service microservice. It contains three models: Technicians, Appointments, and AutomobileVO. This app enables various functionalities including adding/removing technicians, listing all technicians, making/deleting appointments, updating appointment statuses, and listing all appointments.

Poll serves a role in polling Automobile data from the Inventory API every 60 seconds to create or update an AutomobileVO

### RESTful Endpoints
#### Technicians
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8080/api/technicians/ | List technicians |
|`POST`| http://localhost:8080/api/technicians/ | Create a technician |
|`DELETE`| http://localhost:8080/api/technicians/:id | Delete a specific technician |
<details>
<summary><strong>Example GET Output</strong></summary>

##### List technicians:
```
{
	"technicians": [
		{
			"id": 1,
			"employee_id": "tcruise",
			"first_name": "Tom",
			"last_name": "Cruise"
		}
	]
}
```
</details>

<details>
<summary><strong>Example POST Input and Output</strong></summary>

##### Input:
```
{
	"first_name": "Tom",
	"last_name": "Cruise",
	"employee_id": "tcruise"
}
```

##### Output:
```
{
	"id": 1,
	"employee_id": "tcruise",
	"first_name": "Tom",
	"last_name": "Cruise"
}
```
</details>

<details>
<summary><strong>Example Delete Output</strong></summary>

##### Delete a specific vehicle model:
```
{
	"deleted": true
}
```
</details>

#### Appointments
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8080/api/appointments/ | List appointments |
|`POST`| http://localhost:8080/api/appointments/ | Create an appointment |
|`DELETE`| http://localhost:8080/api/appointments/:id | Delete an appointment |
|`PUT`| http://localhost:8080/api/appointments/:id/cancel| Set appointment status to canceled |
|`PUT`| http://localhost:8080/api/appointments/:id/finish | Set appointment status to finished |
<details>
<summary><strong>Example GET Output</strong></summary>

##### List appointments:
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
</details>

<details>
<summary><strong>Example POST Inputs and Outputs</strong></summary>

##### Input:
```
{
	"date_time":"2023-04-25T16:30:00",
	"reason": "Broken windows",
	"status":"created",
	"vin": "WBSFV9C5XDD096380",
	"customer":"Miley Cyrus",
	"technician": 1
}
```

##### Output:
```
{
	"id": 1,
	"date_time": "2023-04-25T16:30:00",
	"reason": "Broken windows",
	"status": "created",
	"vin": "WBSFV9C5XDD096380",
	"customer": "Miley Cyrus",
	"technician": {
		"id": 1,
		"employee_id": "tcruise",
		"first_name": "Tom",
		"last_name": "Cruise"
	}
}
```
</details>

<details>
<summary><strong>Example PUT Outputs</strong></summary>

##### Set appointment status to canceled:
```
[
	{
		"id": 1,
		"date_time": "2023-04-25T16:30:00+00:00",
		"reason": "Broken windows",
		"status": "cancelled",
		"vin": "WBSFV9C5XDD096380",
		"customer": "Miley Cyrus",
		"technician": {
			"id": 1,
			"employee_id": "tcruise",
			"first_name": "Tom",
			"last_name": "Cruise"
		}
	}
]
```

##### Set appointment status to finished:
```
[
	{
		"id": 1,
		"date_time": "2023-04-25T16:30:00+00:00",
		"reason": "Broken windows",
		"status": "finished",
		"vin": "WBSFV9C5XDD096380",
		"customer": "Miley Cyrus",
		"technician": {
			"id": 1,
			"employee_id": "tcruise",
			"first_name": "Tom",
			"last_name": "Cruise"
		}
	}
]
```
</details>
<details>
<summary><strong>Example DELETE Output</strong></summary>

##### List appointments:
```
{
	"deleted": true
}
```
</details>

## Sales Microservice

Two applications "Api" and "Poll" are contained in Sales microservice.

Api is a Django application with a Django Project named "sales_project". This project consists a Django app named "sales_rest". sales_rest app handles list, create and delete functionality for salespeople (which are objects of SalesPerson models), customers (which are objects of Customer model) and sales (which are objects of Sale model) of specific automobiles (AutomobilesVO objects) in a dealership's inventory.

Poll is an application for polling the Automobile data from the Inventory API every 60 seconds and creates or updates an AutomobileVO object within Sales database.

We utilized React to render a dynamic single page application.

### RESTful Endpoints
#### Salespeople
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8090/api/salespeople/ | List salespeople |
|`POST`| http://localhost:8090/api/salespeople/ | Create a salesperson |
|`DELETE`| http://localhost:8090/api/salespeople/:id | Delete a specific salesperson |
|`GET`| http://localhost:8090/api/salespeople/:id/sales | List saleshistory of a specific salesperson |

<details>
<summary><strong>Example GET Outputs</strong></summary>

##### List salespeople:
```
{
	"salespersons": [
		{
			"first_name": "Fran",
			"last_name": "Healy",
			"employee_id": "1234567",
			"id": 1
		},
	]
}
```
</details>

<details>
<summary><strong>Example GET Inputs and Outputs</strong></summary>

##### List saleshistory of a specific salesperson:
##### Input:
```
{
	"employee_id":1234567
}
```

##### Output:
```
{
	"sales": [
		{
			"automobile": {
				"vin": "12312312312312312",
				"sold": false
			},
			"salesperson": {
				"first_name": "Fran",
				"last_name": "Healy",
				"employee_id": "1234567",
				"id": 1
			},
			"customer": {
				"first_name": "Zane",
				"last_name": "Hudson",
				"address": "4056 Los Gatos",
				"phone_number": "3109377303",
				"id": 5
			},
			"price": 888,
			"id": 4
		},
		{
			"automobile": {
				"vin": "12312312312312312",
				"sold": false
			},
			"salesperson": {
				"first_name": "Fran",
				"last_name": "Healy",
				"employee_id": "1234567",
				"id": 1
			},
			"customer": {
				"first_name": "Robert",
				"last_name": "DeNiro",
				"address": "4056 Los Altos",
				"phone_number": "3109377303",
				"id": 6
			},
			"price": 888,
			"id": 5
		},
	]
}
```
</details>

<details>

<summary><strong>Example POST Input and Output</strong></summary>

##### Input:
```
{
	"first_name":"James",
	"last_name":"Joyce",
	"employee_id":1666404
}
```

##### Output:
```
{
	"first_name": "James",
	"last_name": "Joyce",
	"employee_id": 1666404,
	"id": 18
}
```
</details>

<details>

<summary><strong>Example DELETE Input and Output</strong></summary>

##### Input:
```
{
	"id":18
}
```

##### Output:
```
{
	"deleted": true
}
```
</details>

#### Customers Models
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8090/api/customers/ | List customers |
|`POST`| http://localhost:8090/api/customers/ | Create a customer |
|`DELETE`| http://localhost:8090/api/customers/:id | Delete a specific customer |

<details>
<summary><strong>Example GET Output</strong></summary>

##### List customers:
```
{
	"customers": [
		{
			"first_name": "Zane",
			"last_name": "Hudson",
			"address": "4056 Los Gatos",
			"phone_number": "3109377303",
			"id": 5
		},
	]
}
```

</details>

<details>

<summary><strong>Example POST Input and Output</strong></summary>

##### Input:
```
{
	"first_name":"Joanne",
	"last_name":"Rowling" ,
	"address": "444 Campbell Ave",
	"phone_number": 3109377303
}
```

##### Output:
```
{
	"customer": {
		"first_name": "Joanne",
		"last_name": "Rowling",
		"address": "444 Campbell Ave",
		"phone_number": 3109377303,
		"id": 12
	}
}
```
</details>

<details>

<summary><strong>Example DELETE Input and Output</strong></summary>

##### Input:
```
{
	"id":12
}
```

##### Output:
```
{
	"deleted": true
}
```
</details>

#### Sales Models
| HTTP Method | URL | Description |
|---|---|---|
|`GET`| http://localhost:8090/api/sales/ | List sales |
|`POST`| http://localhost:8090/api/sales/ | Create a sale |
|`DELETE`| http://localhost:8090/api/sales/:id | Delete a specific sale |

<details>

<summary><strong>Example GET Output</strong></summary>

##### List sales:
```
{
	"sales": [
		{
			"automobile": {
				"vin": "12312312312312312",
				"sold": false
			},
			"salesperson": {
				"first_name": "Fran",
				"last_name": "Healy",
				"employee_id": "1234567",
				"id": 1
			},
			"customer": {
				"first_name": "Zane",
				"last_name": "Hudson",
				"address": "4056 Los Gatos",
				"phone_number": "3109377303",
				"id": 5
			},
			"price": 888,
			"id": 4
		},
	]
}
```

</details>

<details>
<summary><strong>Example POST Input and Output</strong></summary>


##### Input:
```
{
	"salesperson": 1,
	"customer": 8,
	"automobile": "12312312312312312",
	"price": "888"
}
```

##### Output:
```
{
	"sale": {
		"automobile": {
			"vin": "12312312312312312",
			"sold": false
		},
		"salesperson": {
			"first_name": "Fran",
			"last_name": "Healy",
			"employee_id": "1234567",
			"id": 1
		},
		"customer": {
			"first_name": "Charlotte",
			"last_name": "Mina",
			"address": "40555 Stanford",
			"phone_number": "3109377303",
			"id": 8
		},
		"price": "888",
		"id": 12
	}
}
```
</details>

<details>
<summary><strong>Example DELETE Input and Output</strong></summary>

##### Input:
```
{
	"id":12
}
```

##### Output:
```
{
	"automobile": {
		"vin": "12312312312312312",
		"sold": false
	},
	"salesperson": {
		"first_name": "Fran",
		"last_name": "Healy",
		"employee_id": "1234567",
		"id": 1
	},
	"customer": {
		"first_name": "Charlotte",
		"last_name": "Mina",
		"address": "40555 Stanford",
		"phone_number": "3109377303",
		"id": 8
	},
	"price": 888,
	"id": null
}
```

##### Input:
```
With the id that has already been deleted:
{
	"id":12
}
```

##### Output:
```
With the id that has already been deleted:
{
	"message": "Sale does not exist."
}
```
</details>

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
