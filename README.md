# E-Commerce-backend
## Build Step

- Clone this Repository
- Move to the project directory
- Create a .env file in the project directory and add your MongoDB connection string to it. Open the .env file in a text editor and add the following line:
    ```js
    MONGODB_URL = <YOUR_MONGODB_LINK>
    ```
- run `npm install`
- run `npm start`

- This will start the application and make it accessible at the specified port (usually `http://localhost:5000`).

## E-Commerce API
- BASE URL : `localhost:5000/api`

## Auth APIS

### Register 
- Register as a buyer or seller.
- URL : `/auth/register`
- Method : POST
- Request Body :
```js
{
  "username" : "seller3", 
  "password" : "12345678",
  "type" : "1" // 1 for buyer 2 for seller
}
```

### Login
- URL : `/auth/login`
- Method : POST
- Request Body :
```js
{
    "username" : "seller1",
    "password" : "12345678"
}
```
- Upon successful authentication, a JSON Web Token (JWT) will be provided for secure access to the system.

## Buyers APIS

### Get List of Sellers
- Retrieve a list of all sellers available in the system.
- URL : `/buyer/list-of-sellers`
- Method : GET

### Get Seller's Catalog by Seller ID
- Fetch the catalog of a specific seller identified by the seller_id. This will provide information about the products and services offered by the seller.
- URL : `/buyer/seller-catalog/:seller_id`
- Method : GET


### Create Order for Seller
- To Create a Order
- URL : `/buyer/seller-catalog/:seller_id`
- Method : POST
- Request Body :
```js
{
    "buyerId":"6534a28a3839b0a8c4c277d5",
    "sellerId":"6534a2a03839b0a8c4c277de",
    "productId":"6534a3073839b0a8c4c277e8"
}
```
- Authentication: Please include a valid authentication token in the request headers to ensure secure access to this endpoint.

## Sellers

### Create Catalog
- To Create a catalog for the seller
- URL : `/seller/create-catalog`
- Method : POST
- Request Body :
```js
{
    "catalog" : [
        {
            "name" : "iteam1",
            "price" : "100"
        },
        {
            "name" : "iteam2",
            "price" : "100"
        }
    ]
}
```
- Authentication: Please include a valid authentication token in the request headers to ensure secure access to this endpoint.

### List of orders received by a seller
- Retrieve the list of orders received by a seller
- URL : `/seller/orders`
- Method : GET
- Authentication: Please include a valid authentication token in the request headers to ensure secure access to this endpoint.
