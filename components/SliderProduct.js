import React from 'react'
import styles from '../styles/SliderProduct.module.css';
import Image from "next/image";


function SliderProduct({id, title, price, description, category, image}) {
  return (
    // <div className={styles.container}>
    
        
        <div className={styles.item}>
            <p className={styles.title}>{description}</p>
            <p className={styles.category}>{category}</p>
            <Image
                    src={image}
                    width={80}
                    height={100}
                    objectFit="contain"
                    className={styles.image}
                    />
                    <p className={styles.price}>{price}</p>
        </div>
      
    // </div>

  )
}

export default SliderProduct;