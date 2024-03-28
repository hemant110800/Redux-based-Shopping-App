import {configureStore} from '@reduxjs/toolkit'
import { cartSlice } from './cartSlice';
import {Notification} from './uiSlice';

console.log(cartSlice);
export const storeItems = configureStore(
{
    reducer:{StoredCart:cartSlice.reducer,NotifyUser:Notification.reducer}
})

export const notifyActions = Notification.actions;
//we can also export actions from slice only like cart


// Reducer functions should be pure, side effect free and  synchronous functions, no asynchronous code is allowed 
// Input Old State+Action => Output New State.

/*if we need to use fetch method or any asynchronous operation inside reduer func, how to
 handle in redux

--------------======------------->>>> Two ways to handle asynchronous code

1)Inside the component via (useEffect() hook) 

Here logic of cart item, checking wether item is present or unique item all that logic we hav written inside 
redux functions, now if we are using useState(), inside other component we need to seperately write all that logic
outisde of redux functions and use that ,but in that case we need to use that logic to all other places where we need 

App_useEffectWay.js -- file implemented

2)Inside action creators(Thunk).

Thunks:- A function that delays an action until later.
"-- An action creator function that does not return the action itslef but instead another function which
eventually returns the actions --"

cartSlice.js -- custom action creator created
*/