# Redux-based-Shopping-App
Created a basic shopping app (MERN based), where maintaining some items with price, description and providing Add to Cart Button for each items, based on click we are adding items to cart and updating the count accordingly and based on items selections we are updating the selected item to back-end and retrieving the selected items on need.

App is providing some Favourite Products list, where we can see product details with their price and description and have add to Cart Button, on top header we have **My Cart Button** which contains count value of total items present in cart.

For storing all cart values , success and failure notifications recieved based on card update and card reading api calls we are using **React Redux Library** where maintaining one cart slice for storing all cart related details , one ui slice for maintaining ui like notification state etc.

![image](https://github.com/hemant110800/Redux-based-Shopping-App/assets/48346161/3c281d98-b965-489c-b26c-6c033c88caee)

**Functional Behaviour**

**1) Add to Item** - On click of Add to Item Btn we can add items to cart and parallely we are sending updated cart values to backend and based on success and failure response will show notification at UI end.

![image](https://github.com/hemant110800/Redux-based-Shopping-App/assets/48346161/10e90802-1cda-4e16-94a9-340d9c1bdffc)

![image](https://github.com/hemant110800/Redux-based-Shopping-App/assets/48346161/ce5bda84-bdbb-40c3-839a-39d2a66842a1)

**2) Toggle Cart Details** -
