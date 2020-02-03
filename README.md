# Gigapets 2 Back-End Documentation

## Base URL = "https://gigapets2.herokuapp.com"


### Users
- POST Register a new user
    - url: "/api/auth/register"
    - body: {
        username: 'string',
        password: 'string',
    }
    - success response will include all user info, and a token so the user can immediately be logged in.
	
- POST Login existing user
    - url: "/api/auth/login"
    - body: {
        username: 'string',
        password: 'string',
    }
    - success response will include token 

### Users Children (All require token to be passed through the header)
  - GET All Users Children
    - url: "/api/users/:id/children"
    - success response will have an array of all of the user's children who's token is passed through the header.
 - GET Users Child by Id
    - url: "/api/users/:id/children/:id"
    - successful response will give back a user's specific child by id.
 - POST New Child 
    - url: "/api/users/:id/children"
    - body: 
    {
        "user_id": "",
        "name": ""
    }
    - successful response will give back a user's new
    child
 - DELETE Child
   - url: "/api/users/:id/children/:id"
   - successful response will return json message "Child has been successfully deleted" 

## Childrens Food

 - GET Users Children's Food Item
   - url: "/api/users/:id/children/:id/food"
   - successful response will return a user's children's food items
 - GET Users Child Food Item By Id 
   - url: "/api/users/:id/children/:id/food/:id"
   - successful response will return a users's specific child food item by id 

## Food

- GET All Food Items
  - url: "/api/food"
  - successful response will return all food items in the database
- GET Food Items By Id
  - url: "/api/food/:id"
  - successful response will return food items by id
- GET Food Categories
  - url: "/api/food/c"
  - successful response will return food categories
- POST New Food Item
  - url: "/api/food"
  - body: 
    {
        "name": "",
        "category_id": ""
    }
  - successful respone will add a new food item to the database
- DELETE Food Item
  - url: "/api/food/:id"
  - successful response will return json message: "Food Item successfully deleted"