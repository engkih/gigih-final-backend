# Tokopedia Play (Backend)
This project build for my generasi gigih midterm project.

## Dataase Structure
The database is using MongoDB utulizing mongoose. The default database url was stored in ```.env``` file refered as ```DATABASE_URL```. The default value is :
```
DATABASE_URL = mongodb://localhost:27017/maindb
```

There is 4 collection inside the database :
- ```videos```
- ```users```
- ```products```
- ```comments```

### videos
This collection used as schema for videos database
```
    videoId: {
        required: true,
        type: Number
    },
    videoUrl: {
        required: true,
        type: String
    }
```

### users
This collection used as schema for users database
```
    userId: {
        required: true,
        type: Number
    },
    userName: {
        required : true,
        type: String
    }
```

### products
This collection used as schema for products database
```
    productId: {
        require: true,
        type: Number
    },
    productUrl: {
        require: true,
        type: String
    },
    productTitle: {
        require: true,
        type: String
    },
    productPrice: {
        require: true,
        type: String
    }
```

### comments
This collection used as schema for comments database
```
    videoId: {
        required: true,
        type: Number
    },
    userId: {
        required: true,
        type: Number
    },
    userName: {
        required: true,
        type: String
    },
    comment: {
        required: true,
        type: String
    },
    timestamp: Date
```

## Api Sctructure
The structure consist of several files and folders:
- /
  - ```app.js```server service config, middleware
  - ```.env```
  - ```package-lock.json```
  - ```package.json```
- routes
  - ```routes.js```API router
- model
  - ```comment-list-model.js```comments databse model
  - ```product-list-model.js```products database model
  - ```user-model.js```users database model
  - ```video-list-model.js```videos database model
  
The server will start after ```app.js``` being run. The ```app.js``` act as the entry for the API the it will send to the ```route.js``` to handle the API request. The ```route.js``` will forward the logic to the models file inside the ```/model``` forder used to acces the database. 



## API List

### GET /
Return all videos embeded
- URL Params:
  -None
- Data Params:
  -None
- Headers:
Content type : application/json
- Succes Response:
  -code: 200
  -content:
  ```
  [
    {
        "_id": string,
        "videoId": integer,
        "videoUrl": string
    },
  ]
  ```
### GET /:videoid
Return 4 products randomly and show all comments based on ```videoId``` value.
- URL Params:
  -Required: ```videoId=[integer]```
- Data Params:
  -None
- Headers:
Content type : application/json
- Succes Response:
  -code: 200
  -content:
  ```
  {
    "products": [
        {
            "_id": string,
            "productId": integer,
            "productUrl": string,
            "productTitle": string,
            "productPrice": string
        }
    ],
    "comments": [
        {
            "_id": string,
            "userName": string,
            "comment": string,
            "timestamp": date
        }]
  }
  ```

  ### POST /:videoid/:userid
  Create new comment based on videoId. ```/:userid``` used to refer the registered user in database to pull the username.
  - URL Params:
  -Required: ```videoId=[integer]```
- Data Params:
  ```
  {
      "username" : string,
      "videoId" : integer,
      "comment" : string
  ```
- Headers:
Content type : application/json
- Succes Response:
  -code: 200
  -content: None


## How To Run
1. Clone the repo
   ```
   git clone https://github.com/engkih/gigih-midterm.git
   ```
2. Install the dependencies
   ```
   npm install
   ```
3. Build database based on the ```Database Structure``` mentioned above.
4. Run the server
   ```
   npm start
   ```
5. Test the API
   The servir will run on :
   ```
   http://localhost:3000
   ```

## How To Test API

1. Before we test the API we need to build or populate the database first. To build or populate the database we can refer to the ```Database Structur``` for the structure of the database we will build or populate in MongoDB.
- ```video``` collection format:
  ```
  $video =
    {
        'videoId' : integer,
        'videoUrl' : 'string'
    }

  $db.videos.insertOne(video)
  ```
- ```users``` collection format:
  ```
  $user =
    {
        'userId' : integer,
        'userName' : 'string'
    }

  $db.users.inserOne(user)
  ```
- ```products``` collection format:
```
$product =
    {
        'productId' : integer,
        'productUrl' : 'string',
        'productTitle' : 'string,
        'productPrice' : 'string'
    }

  $db.products.inserOne(product)
```
- ```comments``` collection format:
```
  $comment =
    {
        'videoId' : integer,
        'userId' : integer,
        'userName' : 'string,
        'comment' : 'string'
    }

  $db.comments.inserOne(product)
```

2. Start the server
   ```
   npm start
   ```

3. To test the ```GET '/'```, it will send repond list of embeded youtube video
   ```
   http://localhost:300
   ```
4. To test the ```GET '/:videoid```, it will send respond list of 4 products randomly, and list of all comment base on ```/:videoid```.
   ```
   http://localhost:3000/:videoid
   ```
5. To test the ```POST /:videoid/:userid```, it will send new comment to the database based on ```/:videoid```.
   ```
   http://localhost:3000/:videoid/:userid
   ```
