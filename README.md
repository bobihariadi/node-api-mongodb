## To install this project

npm install

### run this project

`docker compose up` for node js

`docker-compose up` for mongo-db

### rest api with basic auth

username : admin

password : 123

## url postman
#### basic sample select url, method GET
http://localhost:3000/mongo/list

#### basic sample insert url, method POST
http://localhost:3000/mongo/insert

header

key : Content-Type

value : application/json


body

{
    "nama" : "test3",
    "phone" : "xxxxxx",
    "sex"   : "male"
}

#### basic sample update url, method PATCH
http://localhost:3000/mongo/update

header

key : Content-Type

value : application/json


body

{
    "nama" : "test1",
    "updatelist" : {
        "nama" : "test",
        "phone" : "123456",
        "sex" : "female"
    }
}

#### basic sample delete url, method DELETE
http://localhost:3000/mongo/delete

header

key : Content-Type

value : application/json


body

{
    "nama" : "test"
}
