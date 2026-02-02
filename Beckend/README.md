# UBER Clone - Backend API Documentation

## User Registration Endpoint

### Endpoint
```
POST /users/register
```

### Description
This endpoint allows new users to register for the UBER Clone application. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token.

### Request Body
The request must be sent as JSON with the following structure:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

### Request Parameters

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `fullname.firstname` | String | Yes | Min length: 3 characters | User's first name |
| `fullname.lastname` | String | No | Min length: 3 characters | User's last name |
| `email` | String | Yes | Valid email format | User's email address (must be unique) |
| `password` | String | Yes | Min length: 6 characters | User's password |

### Response

#### Success Response (201 Created)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

#### Error Response (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Status Codes

| Code | Status | Description |
|------|--------|-------------|
| `201` | Created | User successfully registered. Authentication token is provided. |
| `400` | Bad Request | Validation error. Invalid email, firstname too short, password too short, or missing required fields. |

### Example Request
```bash
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Validation Rules

- **Email**: Must be a valid email format
- **First Name**: Minimum 3 characters required
- **Last Name**: Minimum 3 characters (optional field)
- **Password**: Minimum 6 characters required, will be hashed using bcrypt

### Notes

- Passwords are automatically hashed using bcrypt before being stored in the database
- The returned authentication token (JWT) can be used for subsequent authenticated requests
- Email addresses must be unique - attempting to register with an existing email will fail

---

## User Login Endpoint

### Endpoint
```
POST /users/login
```

### Description
This endpoint allows registered users to log into the UBER Clone application. It validates the email and password, and returns an authentication token upon successful authentication.

### Request Body
The request must be sent as JSON with the following structure:

```json
{
  "email": "string",
  "password": "string"
}
```

### Request Parameters

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `email` | String | Yes | Valid email format | User's registered email address |
| `password` | String | Yes | Min length: 6 characters | User's password |

### Response

#### Success Response (200 OK)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

#### Error Response (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Status Codes

| Code | Status | Description |
|------|--------|-------------|
| `200` | OK | User successfully authenticated. Authentication token is provided. |
| `400` | Bad Request | Validation error. Invalid email, password too short, or missing required fields. |
| `401` | Unauthorized | Invalid email or password combination. |

### Example Request
```bash
curl -X POST http://localhost:5000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Validation Rules

- **Email**: Must be a valid email format
- **Password**: Minimum 6 characters required

### Notes

- The returned authentication token (JWT) can be used for subsequent authenticated requests
- Credentials must match an existing user account in the database
- Invalid credentials will result in an authentication failure

---

## User Profile Endpoint

### Endpoint
```
GET /users/profile
```

### Description
This endpoint retrieves the authenticated user's profile information. It requires a valid authentication token and returns the logged-in user's details.

### Authentication
This is a **protected endpoint** that requires authentication. The token must be provided in one of the following ways:
- HTTP Header: `Authorization: Bearer <token>`
- Cookie: `token=<token>`

### Request Parameters
No request body is required. Authentication is handled via middleware.

### Response

#### Success Response (200 OK)
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com"
}
```

#### Error Response (401 Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

### Status Codes

| Code | Status | Description |
|------|--------|-------------|
| `200` | OK | User profile successfully retrieved. |
| `401` | Unauthorized | Missing, invalid, or expired authentication token. |

### Example Request
```bash
curl -X GET http://localhost:5000/users/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Notes

- This endpoint requires a valid authentication token obtained from the `/users/register` or `/users/login` endpoints
- Only authenticated users can access their own profile information
- The token is validated by the authentication middleware before the request reaches the controller

---

## User Logout Endpoint

### Endpoint
```
GET /users/logout
```

### Description
This endpoint logs out the authenticated user by clearing the authentication token and adding it to a blacklist to prevent further use. It invalidates the user's session and requires a valid authentication token.

### Authentication
This is a **protected endpoint** that requires authentication. The token must be provided in one of the following ways:
- HTTP Header: `Authorization: Bearer <token>`
- Cookie: `token=<token>`

### Request Parameters
No request body is required. Authentication is handled via middleware.

### Response

#### Success Response (200 OK)
```json
{
  "message": "Logged out"
}
```

#### Error Response (401 Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

### Status Codes

| Code | Status | Description |
|------|--------|-------------|
| `200` | OK | User successfully logged out. Token has been blacklisted. |
| `401` | Unauthorized | Missing, invalid, or expired authentication token. |

### Example Request
```bash
curl -X GET http://localhost:5000/users/logout \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### Notes

- This endpoint requires a valid authentication token obtained from the `/users/register` or `/users/login` endpoints
- The token is added to the blacklist collection, preventing it from being used for future authenticated requests
- The `token` cookie is cleared from the client's browser
- After logout, the user must log in again to get a new valid token
- The token is validated by the authentication middleware before the request reaches the controller

---

# Captain Routes

## Captain Registration Endpoint

### Endpoint
```
POST /captains/register
```

### Description
This endpoint allows new captains to register for the UBER Clone application. It validates the input data, hashes the password, creates a new captain account with vehicle information in the database, and returns an authentication token.

### Request Body
The request must be sent as JSON with the following structure:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "integer",
    "vehicleType": "string"
  }
}
```

### Request Parameters

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `fullname.firstname` | String | Yes | Min length: 3 characters | Captain's first name |
| `fullname.lastname` | String | No | Min length: 3 characters | Captain's last name |
| `email` | String | Yes | Valid email format | Captain's email address (must be unique) |
| `password` | String | Yes | Min length: 6 characters | Captain's password |
| `vehicle.color` | String | Yes | Min length: 3 characters | Vehicle color (e.g., "Black", "White", "Silver") |
| `vehicle.plate` | String | Yes | Min length: 3 characters | Vehicle registration plate number |
| `vehicle.capacity` | Integer | Yes | Min value: 1 | Number of passengers the vehicle can accommodate |
| `vehicle.vehicleType` | String | Yes | Must be "car", "motorcycle", or "auto" | Type of vehicle |

### Response

#### Success Response (201 Created)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error Response (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### Status Codes

| Code | Status | Description |
|------|--------|-------------|
| `201` | Created | Captain successfully registered. Authentication token is provided. |
| `400` | Bad Request | Validation error. Invalid input, missing required fields, or invalid vehicle type. |

### Example Request
```bash
curl -X POST http://localhost:5000/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane@example.com",
    "password": "password123",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }'
```

### Validation Rules

- **Email**: Must be a valid email format and unique
- **First Name**: Minimum 3 characters required
- **Last Name**: Minimum 3 characters (optional field)
- **Password**: Minimum 6 characters required, will be hashed using bcrypt
- **Vehicle Color**: Minimum 3 characters required
- **Vehicle Plate**: Minimum 3 characters required
- **Vehicle Capacity**: Must be an integer with minimum value of 1
- **Vehicle Type**: Must be one of: "car", "motorcycle", or "auto"

### Notes

- Passwords are automatically hashed using bcrypt before being stored in the database
- The returned authentication token (JWT) can be used for subsequent authenticated requests
- Email addresses must be unique - attempting to register with an existing email will fail
- All vehicle information is required for captain registration
- The vehicle type is restricted to specific types for consistency and operational purposes
