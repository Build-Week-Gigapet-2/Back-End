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
 - GET Users Child by child_id
    - url: "/api/users/:id/children/:id"
    - successful response will give back a user's specific child by id.