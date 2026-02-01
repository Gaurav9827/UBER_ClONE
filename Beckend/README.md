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
