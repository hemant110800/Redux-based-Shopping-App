import { notifyActions } from './index';

import { cartActions } from './cartSlice';

const url = "http://localhost:8081";

/*For handling asynchrnous code in redux ->  custom action creator which 
    returns a function which eventually dispatch an action. */
    export const saveCartDetails = (cart) => {
        return async (dispatch) => {
            dispatch(notifyActions.showNotifications(
                {
                    "status": "pending",
                    "title": "Pending",
                    "message": "Data Sending!!"
                }));
    
            const storeItemToDB = async () => {
    
                const response = await fetch(url + "/storeItem", {
                    method: "POST",
                    body: JSON.stringify({cart:{ "cartValues": cart.cartValues,'totalItems':cart.totalItems }}),
                    headers: { "Content-Type": "application/json" }
                })
    
                if (!response.ok) {
                    throw new Error("Data Saved Failed!!");
                }
    
                const responseD = await response.json();
                console.log(responseD);
     
                // dispatch(notifyActions.showNotifications({ "status": "success", "title": "Success", "message": "Data Successfully Saved!!" }));
                // setTimeout(() => {
                //     dispatch(notifyActions.hideNotification());
                // }, 2000);
     
            }
    
            try{
                await storeItemToDB(); //because outer returing func we are using async
                
                dispatch(notifyActions.showNotifications({ "status": "success", "title": "Success", "message": "Data Successfully Saved!!" }));
                setTimeout(() => {
                    dispatch(notifyActions.hideNotification());
                }, 2000);
            }
            catch(err){
                dispatch(notifyActions.showNotifications({ "status": "error", "title": "An error occured", "message": err.message }));
                setTimeout(() => {
                    dispatch(notifyActions.hideNotification());
                }, 4000);
            }
    
            //Another way 
            // await storeItemToDB().catch((err) => {
            //     dispatch(notifyActions.showNotifications({ "status": "error", "title": "An error occured", "message": err.message }));
            //     setTimeout(() => {
            //         dispatch(notifyActions.hideNotification());
            //     }, 4000);
            // });
    
    
        }
    }
    
export const fetchCartDetails = () =>{
  return async(dispatch)=>{
    dispatch(notifyActions.showNotifications(
        {
            "status": "pending",
            "title": "Pending",
            "message": "Data Retrieval Pending!!"
        }));

    const getItemFromDB = async () => {

        const response = await fetch(url + "/getItem")

        if (!response.ok) {
            throw new Error("Data Saved Failed!!");
        }

        const responseD = await response.json();
        console.log(responseD);

        return responseD;
    }

    try{
        const storedCartValues = await getItemFromDB(); //because outer returing func we are using async
        console.log(storedCartValues);
        dispatch(cartActions.replaceCart(storedCartValues));

        dispatch(notifyActions.showNotifications({ "status": "success", "title": "Success", "message": "Data Successfully Retrieved!!" }));
        setTimeout(() => {
            dispatch(notifyActions.hideNotification());
        }, 2000);
    }
    catch(err){
        dispatch(notifyActions.showNotifications({ "status": "error", "title": "An error occured", "message": err.message }));
        setTimeout(() => {
            dispatch(notifyActions.hideNotification());
        }, 4000);
    }

 
  }
}