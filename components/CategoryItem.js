import React from 'react';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import styles from '../styles/category.module.css'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


function CategoryItem() {
  return (
    <div className={styles.cat_items}>   
            <div className={styles.cat_item}>
              <div className={styles.item_container}>
                    <div className={styles.icon_box}>
                        <TvOutlinedIcon className={styles.cat_icon}/>
                    </div>
                      <div  className={styles.name_space}>
                          <span className={styles.cat_name}>Electronics</span>
                      </div>
                      <div className={styles.downIcon_space}>
                          <KeyboardArrowDownOutlinedIcon className={styles.arrow_down}/>
                      </div>
              </div> 
            </div>
        </div>
  )
}

export default CategoryItem