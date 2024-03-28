import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector,useDispatch} from 'react-redux';
import Notification from './components/UI/Notification';
import { Fragment , useEffect} from 'react';
import { saveCartDetails,fetchCartDetails } from './store/cartactions';

let initialValue = true;// we want to avoid first time service call, this variable define once , 
                        // independent of component re-renders.


//For service call we can maintain loadstate, errorState with useState but here we 
// will maintain redux state only in uiSlice as notification

function App() {

  const cartshowState = useSelector((state)=>state.NotifyUser.showCartItems);
  const notification_state = useSelector((state)=>state.NotifyUser)
  const cartDetails = useSelector((state)=>state.StoredCart);
  const dispatch = useDispatch();

   useEffect(()=>{
     dispatch(fetchCartDetails());
  },[dispatch]);//only execute for first time

  useEffect(()=>{
 
    if(initialValue){ //this blocks only for first time when application started
    initialValue=false;
      return;
   }

  //with dispatch only func will run because in redux it will dispatch actions
  
  if(cartDetails.changeCart){ // avoid saving of cart for first time when fetching and redux state updation happening
    dispatch(saveCartDetails(cartDetails));
  }

  },[cartDetails,dispatch])

// console.log(cartshowState);
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
