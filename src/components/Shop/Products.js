import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const product_list = [
    {
      id:'It_1',
      title: "Shoes",
      price: 30,
      description: "To wear in legs"
    },
    {
      id:'It_2',
      title: "Shirt",
      price: 50,
      description: "To wear in upper body"
    },
    {
      id:'It_3',
      title: "Pant",
      price: 80,
      description: "To wear in bottom body"
    }
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {product_list.map((Item) => {
          return (
            <ProductItem title={Item.title}
              key={Item.id}
              id={Item.id}
              price={Item.price}
              description={Item.description}
            />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
