const xhr = new XMLHttpRequest();

xhr.addEventListener('load', ()=>{
    console.log(xhr.response);
})


xhr.open('GET', 'https://supersimplebackend.dev/');
xhr.send();

/*
List of URL paths
Here is a list of URL paths that are supported by this backend.
Each URL path gives a different response when you send a request to it.
GET /
GET /hello
GET /products/first
GET /documentation
GET /images/apple.jpg
GET /products
GET /cart
POST /orders
GET /greeting
POST /greeting

 */
