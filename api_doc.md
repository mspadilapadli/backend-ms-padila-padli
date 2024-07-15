# Backend-MS-Padila-Padli

## Models

### User

```txt
- username : string,
- email : string, required, unique
- password : string, required
- role : string, required
```

### Product

```txt
- name : string
- price : integer
- stock : integer
- merchantId : integer
```

### Transaction

```txt
- customerId : integer
- productId : integer
- quantity : integer
- totalPrice : integer
```

## Endpoints

List of available endpoints:

-   `POST /register`
-   `POST /login`

Routes below need authentication:

-   `GET/product`
-   `GET/product/:id`

Routes below need authentication & authorization:

-   `POST/product/add`
-   `PUT/product/:id`
-   `DELETE/product/:id`
-   `GET/transaction`
-   `POST/transaction`

## 1. POST /register

Request:

-   body:

```json
{
    "username": "string",
    "email": "string",
    "password": "string",
    "role": "string"
}
```

note : default value "role" = "customer"

_Response (201 - Created)_

```json
{
    "message": "account has been created",
    "username": "string",
    "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

-   body:

```json
{
    "email": "string",
    "password": "string"
}
```

_Response (200 - OK)_

```json
{
    "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
    "message": "Invalid email or password"
}
```

&nbsp;

## 3. GET /product

Description:

-   Get all product from database

Request:

-   headers:

```json
{
    "Authorization": "Bearer <string token>"
}
```

_Response (200 - OK)_

```json
[
     {
        "id": 1,
        "name": "Buku Tulis",
        "price": 10000,
        "stock": 10,
        "merchantId": 1,
        "createdAt": "2024-07-15T15:29:10.425Z",
        "updatedAt": "2024-07-15T15:29:10.425Z"
    },
    {
        "id": 2,
        "name": "Pulpen",
        "price": 3000,
        "stock": 20,
        "merchantId": 1,
        "createdAt": "2024-07-15T15:29:10.425Z",
        "updatedAt": "2024-07-15T15:29:10.425Z"
    },
    {
        "id": 3,
        "name": "Tas",
        "price": 50000,
        "stock": 15,
        "merchantId": 2,
        "createdAt": "2024-07-15T15:29:10.425Z",
        "updatedAt": "2024-07-15T15:29:10.425Z"
    },
    ...
]
```

&nbsp;

## 4. GET /product/:id

Request:

-   headers:

```json
{
    "Authorization": "Bearer <string token>"
}
```

-   params:

```json
{
    "id": "integer"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": "integer",
        "name": "string",
        "price": "integer",
        "stock": "integer",
        "merchantId": "integer",
        "createdAt": "date",
        "updatedAt": "date"
    }
]
```

_Response (404 - Not Found)_

```json
{
    "message": "Data not found"
}
```

&nbsp;

## 5. POST /product/add

Description:

-   Add new product (merchant only)

Request:

-   headers:

```json
{
    "Authorization": "Bearer <string token>"
}
```

-   body:

```json
{
    "name": "string",
    "price": "integer",
    "stock": "integer"
}
```

_Response (201 - Created)_

```json
{
    "message": "string",
    "product": {
        "id": "integer",
        "name": "string",
        "price": "integer",
        "stock": "integer",
        "merchantId": "integer",
        "updatedAt": "date",
        "createdAt": "date"
    }
}
```

&nbsp;

## 6. PUT /product/:id

Request:

-   headers:

```json
{
    "Authorization": "Bearer <string token>"
}
```

-   body:

```json
{
    "name": "string",
    "price": "integer",
    "stock": "integer"
}
```

-   params:

```json
{
    "id": "integer"
}
```

_Response (200 - OK)_

```json
[
    "message": "product with id ${id} has been updated",
    "updated": {
       "id": "integer",
        "name": "string",
        "price": "integer",
        "stock": "integer",
        "merchantId": "integer",
        "updatedAt": "date",
        "createdAt": "date"
    }
]
```

_Response (403 - Forbidden)_

```json
{
    "message": "You're not Unauthorized"
}
```

_Response (404 - Not Found)_

```json
{
    "message": "Data not found"
}
```

&nbsp;

## 7. DELETE /product/:id

Request:

-   headers:

```json
{
    "Authorization": "Bearer <string token>"
}
```

-   params:

```json
{
    "id": "integer"
}
```

_Response (200 - OK)_

```json
{
    "message": " ${product.name} has been deleted"
}
```

_Response (403 - Forbidden)_

```json
{
    "message": "You're not Unauthorized"
}
```

_Response (404 - Not Found)_

```json
{
    "message": "Data not found"
}
```

&nbsp;

## 8. GET /transaction

Description:

-   Get data transaction (where role === "merchant" & merchantId === req.user.id)

Request:

-   headers:

```json
{
    "Authorization": "Bearer <string token>"
}
```

_Response (200 - OK)_

```json
[
      {
        "id": 6,
        "customerId": 4,
        "productId": 13,
        "quantity": 1,
        "totalPrice": 63000,
        "createdAt": "2024-07-15T17:37:08.959Z",
        "updatedAt": "2024-07-15T17:37:08.959Z",
        "Product": {
            "name": "Buku Self 5",
            "merchantId": 9
        },
        "User": {
            "username": "padila"
        }
    },
    {
        "id": 7,
        "customerId": 3,
        "productId": 11,
        "quantity": 1,
        "totalPrice": 63000,
        "createdAt": "2024-07-15T17:41:18.003Z",
        "updatedAt": "2024-07-15T17:41:18.003Z",
        "Product": {
            "name": "Buku Self 3",
            "merchantId": 9
        },
        "User": {
            "username": "customer1"
        }
    },
    {
        "id": 8,
        "customerId": 3,
        "productId": 15,
        "quantity": 1,
        "totalPrice": 63000,
        "createdAt": "2024-07-15T17:41:45.068Z",
        "updatedAt": "2024-07-15T17:41:45.068Z",
        "Product": {
            "name": "Buku Self 8",
            "merchantId": 9
        },
        "User": {
            "username": "customer1"
        }
    },
    ...
]
```

&nbsp;

## 9. POST /transaction

Request:

-   headers:

```json
{
    "Authorization": "Bearer <string token>"
}
```

-   body:

```json
{
    "productId": "integer",
    "quantity": "integer"
}
```

_Response (201 - Created)_

```json
{
    "message": "Transaction success",
    "transaction": {
        "id": 11,
        "productId": 15,
        "customerId": 3,
        "quantity": 2,
        "totalPrice": 135000,
        "updatedAt": "2024-07-15T19:33:57.851Z",
        "createdAt": "2024-07-15T19:33:57.851Z"
    },
    "discount": 15000,
    "shippingCost": 0,
    "finalPrice": 135000
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Insufficient stock"
}
```

_Response (404 - Not Found)_

```json
{
    "message": "Data not found"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
    "message": "Invalid token"
}
```

_Response (403 - Forbidden)_

```json
{
    "message": "You're not Unauthorized"
}
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal server error"
}
```
