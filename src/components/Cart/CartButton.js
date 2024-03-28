import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { notifyActions } from '../../store/index';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const cartItemsCount = useSelector((state)=>state.StoredCart.totalItems);


  const toggleState = ()=>{
    console.log("cart button");
    dispatch(notifyActions.toggleCartArea());
  }

  return (
    <button className={classes.button} onClick={toggleState}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default CartButton;
