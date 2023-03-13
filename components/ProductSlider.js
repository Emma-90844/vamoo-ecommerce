import React, {useRef} from 'react';
import styles from "../styles/ProductSlider.module.css";
import SliderProduct from './../components/SliderProduct';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Timer from './../components/Timer'


function ProductSlider({products}) {


  const handleClick = (direction) => {
    const itemRef = useRef();
    if(direction  === "left"){
      // itemRef.current.style.transform = `translateX(230px)`;
    }
  }


  return (
    <div className={styles.container}>
        <div className={styles.left_side}>
          <h3 className={styles.header_one}>FLASH SALE</h3>
          <h2 className={styles.header_two}>UP TO 90% OFF</h2>
      
        {/* Timer Component */}
        <Timer duration={5 * 24 * 60  * 60 * 1000}/>


          <button className={styles.view_more}>View more</button>
        </div>

        <div className={styles.right_side}>
        <button className={styles.slide_btn_left}><ArrowBackIosIcon className={styles.left} className={styles.icon} onClick={handleClick("left")}/></button>
        <div className={styles.items_container} >
         
          {products.map(({id, title, price, description, category, image}) => (
          <SliderProduct
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

        <button className={styles.slide_btn_right}><ArrowForwardIosIcon className={styles.icon}  onClick={handleClick("right")}/></button>

     
        {/* <div className={styles.slide_button}>
          <button className={styles.button}>1</button>
          <button  className={styles.button}>2</button>
          <button className={styles.button}>4</button>
          <button className={styles.button}>4</button>
        </div> */}
         

        </div>
    </div>
  )
}

export default ProductSlider









































