# Redux-based-Shopping-App
Created a basic shopping app (MERN based), where maintaining some items with price, description and providing Add to Cart Button for each items, based on click we are adding items to cart and updating the count accordingly and based on items selections we are updating the selected item to back-end and retrieving the selected items on need.

App is providing some Favourite Products list, where we can see product details with their price and description and have add to Cart Button, on top header we have **My Cart Button** which contains count value of total items present in cart.

For storing all cart values , success and failure notifications recieved based on card update and card reading api calls we are using **React Redux Library** where maintaining one cart slice for storing all cart related details , one ui slice for maintaining ui like notification state etc.

![image](https://github.com/hemant110800/Redux-based-Shopping-App/assets/48346161/3c281d98-b965-489c-b26c-6c033c88caee)

**Functional Behaviour**

**1) Toggle Cart Details** - User can see or hide cart details container onclick of My Cart Button from header

![image](https://github.com/hemant110800/Redux-based-Shopping-App/assets/48346161/a68fa37e-02a7-4fc3-9f42-1845c2c347e0)

**2) Add to Item** - On click of Add to Item Btn we can add items to cart and parallely we are sending updated cart values to backend and based on success and failure response will show notification at UI end. Also in cart details container if we click on + button it will add items to cart and accordingly everything updates (Backend json, price , cart count etc)

![image](https://github.com/hemant110800/Redux-based-Shopping-App/assets/48346161/10e90802-1cda-4e16-94a9-340d9c1bdffc)

![image](https://github.com/hemant110800/Redux-based-Shopping-App/assets/48346161/a171f90f-ee4b-4925-ac16-d876cd9d479a)

**3) Remove from Item** - From Cart Details area we have - button , from there we can remove item or product from cart and accordingly redux store , backend all will update if only one item is present in cart it will remove item totally else it will reduce count by 1.

![image](https://github.com/hemant110800/Redux-based-Shopping-App/assets/48346161/d8ea5066-9318-4080-af4c-fcd9a719c0ac)

**Tech Used**

**Front-end:** React, React Hooks, Redux, JavaScript, HTML, CSS

**Back-end:** NodeJS, ExpressJS, Express Router, Basic GET POST APIs

**Database :** JSON files at back-end.
