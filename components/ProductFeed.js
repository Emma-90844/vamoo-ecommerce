import React from 'react'
import Product from './../components/Product'
import styles from '../styles/ProductFeed.module.css';


function ProductFeed({products}) {

  return (
    <div className={styles.product_feed}>
    
      {products.map(({id, title, price, description, category, image}) => (
        <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        />
      ))}

    </div>
  )
}

export default ProductFeed