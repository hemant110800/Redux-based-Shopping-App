import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cartSlice';
import { useSelector } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const cartDetails = useSelector((state)=>state.StoredCart);
  const dispatch = useDispatch();
  
  const addToCart = ()=>{

    //Currently we have written transform logic in whole redux reducer() and from there we cannot handle
    //async operations useffect so that's why we need to transform whole code here only and will replace the cart
    // updated value in redux global state also.
  
    // as we are handling transform data outisde we need to take care of original redux states like we should not 
    // change that that's why for list etc we can use slice() and for dict {...}

    //filter() return list and find() returns particular seach element of list

    const new_quantity = cartDetails.totalItems + 1; //so that original state will not affect

    const updated_items = cartDetails.cartValues.slice(); //slice methods return copy of arr to updated_items
    console.log(updated_items);
    const ItemPresent = updated_items.find((itm)=> itm.id === id);
    console.log(ItemPresent);

    if(ItemPresent){
      const updatedItem={...ItemPresent};
      console.log(updatedItem);
      updatedItem.quantity++;// we will not change direct ItemPresent as it will change original state
       updatedItem.total += updatedItem.price;
       const ind = updated_items.findIndex((itm)=>{ return itm.id == id});
       updated_items[ind] = updatedItem;
    }
    else{
      updated_items.push({"id":id,"title":title,"price":price,"quantity":1,"total":price
        })
    }

    const newCart = {
      totalItems: new_quantity,
      cartValues: updated_items,
    };
 
    console.log(newCart);
     dispatch(cartActions.replaceCart(newCart));
    
    // dispatch(cartActions.addItem({id,title,price}));

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
