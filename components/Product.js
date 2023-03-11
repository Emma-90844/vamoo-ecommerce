import React from 'react';
import Image from "next/image";
import styles from '../styles/Product.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';





function Product({id, title, price, description, catergory, image}) {
  return (
    <div className={styles.container}>
        <div className={styles.icons}>
            <ShoppingCartOutlinedIcon className={styles.icon}/>
            <FavoriteBorderIcon className={styles.icon}/>
        </div>
        <Image
              src={image}
              width={180}
              height={200}
              objectFit="contain"
              className={styles.image}
            />
            <div className={styles.item_info}>
                <div className={styles.left_side}>
                    <div className={styles.percent}>90%</div>
                </div>
                <div className={styles.left_side}>
                    <h3 className={styles.price}>${price}</h3>
                    <p><s>18.99</s></p>
                </div>

            </div>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>

    </div>
  )
}

export default Product