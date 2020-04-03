# Be The Hero

> How to install and start

* git clone https://github.com/pmapelli/bethehero
* Go to repository folder

> Back-end

First install back-end dependencies

```
$> cd ./backend/ && yarn
```

Start back-end service

```
$> yarn dev 
```

Front-end

First install front-end dependencies

```
$> cd ./frontend/ && yarn
```

Then run app

```
$> yarn start
```

> Mobile

First install mobile dependencies

```
$> cd ./frontend/ && yarn
```

Then run app

```
$> yarn start
```

# Frontend

<a href="https://www.loom.com/share/26f2485b5bbf4b6a8cfdd1bcdf98d4c5"> <p>Google Chrome - Be the hero - Watch Video</p> <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/26f2485b5bbf4b6a8cfdd1bcdf98d4c5-with-play.gif"> </a>

> SITE

https://sleepy-kowalevski-89d50c.netlify.com/

> IMAGES

![login](https://user-images.githubusercontent.com/15129047/78364315-a198a800-7593-11ea-98fc-0f66b80359ed.png)

![profile](https://user-images.githubusercontent.com/15129047/78364513-f4725f80-7593-11ea-9176-4e5032493717.png)

![newIncident](https://user-images.githubusercontent.com/15129047/78364579-0fdd6a80-7594-11ea-8825-eae62609f0a3.png)

# Backend
https://apple-tart-67179.herokuapp.com/

> ROUTES IN BACKEND

POST('/ongs') - Create a login

``` 
{
"name": "",
"email": "",
"whatsapp": "",
"city": "",
"uf": ""
} 
```

GET('/ongs') - List ongs

POST('/sessions') - Log in to an account

```
{
	"id": "f2ce3789"
}
```

LIST('/incidents') - List all incidents

> From here, authentication is required

```
KEY - Authorization \ VALUE - ONGID
```

GET('/profile') - Ong incidents

POST('/incidents') - Create an incident

```
{
	"title": "",
	"description": "",
	"value": 
}
```

DEL('/incidents/:incidentID') - Delete an incident

# Download app mobile
https://drive.google.com/open?id=1dvKX89NAREz0-IBUPUtFhoRMVlMeOxvb

> VIDEO

https://www.youtube.com/embed/nMrScoI0ZKc
