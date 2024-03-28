import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/UI/Notification';
import { Fragment, useEffect } from 'react';
import { notifyActions } from "./store/index";

const url = "http://localhost:8081"

let initialValue = true;// we want to avoid first time service call, this variable define once , 
// independent of component re-renders.


//For service call we can maintain loadstate, errorState with useState but here we 
// will maintain redux state only in uiSlice as notification

function App() {

  const cartshowState = useSelector((state) => state.NotifyUser.showCartItems);
  const notification_state = useSelector((state) => state.NotifyUser)
  const cartDetails = useSelector((state) => state.StoredCart);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useffect");

    const storeItemToDB = async () => {

      const response = await fetch(url + "/storeItem", {
        method: "POST",
        body: JSON.stringify({ cart: cartDetails.cartValues }),
        headers: { "Content-Type": "application/json" }
      })

      if (!response.ok) {
        throw new Error("Data Saved Failed!!");
      }

      const responseD = await response.json();
      console.log(responseD);
      dispatch(notifyActions.showNotifications({ "status": "success", "title": "Success", "message": "Data Successfully Saved!!" }));
      setTimeout(() => {
        dispatch(notifyActions.hideNotification());
      }, 2000);
    }

    if (initialValue) { //this blocks only for first time when application started
      initialValue = false;
      return;
    }


    dispatch(notifyActions.showNotifications({ "status": "pending", "title": "Pending", "message": "Data Sending!!" }));

    // if(cartDetails.cartValues.length !=0){
    storeItemToDB().catch((err) => {
      dispatch(notifyActions.showNotifications({ "status": "error", "title": "An error occured", "message": err.message }));
      setTimeout(() => {
        dispatch(notifyActions.hideNotification());
      }, 4000);
    });
    // } alternate way

  }, [cartDetails, dispatch])

  console.log(cartshowState);
  return (
    <Fragment>
      {notification_state.status !== "" && <Notification status={notification_state.status} title={notification_state.title} message={notification_state.message} />}
      <Layout>
        {cartshowState && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
