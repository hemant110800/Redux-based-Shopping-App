import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cartSlice';


const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  
 
  const addToCart = ()=>{

    //If reducer logic we will kept here, wherever we are adding item eveytime we need to call this function 
    // or write this logic again and again so another way is to directly take the stored cart from recux state and
    // update the server

    dispatch(cartActions.addItem({id,title,price}));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
