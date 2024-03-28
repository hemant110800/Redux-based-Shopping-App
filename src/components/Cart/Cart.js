import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  
  const CartDetails = useSelector((state)=>state.StoredCart.cartValues)
  console.log(CartDetails);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {CartDetails.map((cartItems)=>{
          return (<CartItem key={cartItems.id}
          item={{ id:cartItems.id, title: cartItems.title, quantity: cartItems.quantity, total: cartItems.total, price: cartItems.price }}
        />)
        })}
      </ul>
    </Card>
  );
};

export default Cart;
