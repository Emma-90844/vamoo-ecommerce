import React from 'react'
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import styles from '../styles/category.module.css'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Button, Space } from 'antd';
import StorefrontIcon from '@mui/icons-material/Storefront';


function Category() {
  return (
    <div className={styles.container}>
      
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

            <div className={styles.cat_item}>
              <div className={styles.item_container}>
                    <div className={styles.icon_box}>
                        <SmartphoneIcon className={styles.cat_icon}/>
                    </div>
                      <div  className={styles.name_space}>
                          <span className={styles.cat_name}>Phones & Tables</span>
                      </div>
                      <div className={styles.downIcon_space}>
                          <KeyboardArrowDownOutlinedIcon className={styles.arrow_down}/>
                      </div>
              </div> 
            </div>

            <div className={styles.cat_item}>
              <div className={styles.item_container}>
                    <div className={styles.icon_box}>
                        <HomeOutlinedIcon className={styles.cat_icon}/>
                    </div>
                      <div  className={styles.name_space}>
                          <span className={styles.cat_name}>Home & Office</span>
                      </div>
                      <div className={styles.downIcon_space}>
                          <KeyboardArrowDownOutlinedIcon className={styles.arrow_down}/>
                      </div>
              </div> 
            </div>
            <div className={styles.cat_item}>
              <div className={styles.item_container}>
                    <div className={styles.icon_box}>
                        <TvOutlinedIcon className={styles.cat_icon}/>
                    </div>
                      <div  className={styles.name_space}>
                          <span className={styles.cat_name}>Fashion & Beauty</span>
                      </div>
                      <div className={styles.downIcon_space}>
                          <KeyboardArrowDownOutlinedIcon className={styles.arrow_down}/>
                      </div>
              </div> 
            </div>
            <div className={styles.cat_item}>
              <div className={styles.item_container}>
                    <div className={styles.icon_box}>
                        <TvOutlinedIcon className={styles.cat_icon}/>
                    </div>
                      <div  className={styles.name_space}>
                          <span className={styles.cat_name}>Toys & Games</span>
                      </div>
                      <div className={styles.downIcon_space}>
                          <KeyboardArrowDownOutlinedIcon className={styles.arrow_down}/>
                      </div>
              </div> 
            </div>
            <div className={styles.cat_item}>
              <div className={styles.item_container}>
                    <div className={styles.icon_box}>
                        <TvOutlinedIcon className={styles.cat_icon}/>
                    </div>
                      <div  className={styles.name_space}>
                          <span className={styles.cat_name}>Pets</span>
                      </div>
                      <div className={styles.downIcon_space}>
                          <KeyboardArrowDownOutlinedIcon className={styles.arrow_down}/>
                      </div>
              </div> 
            </div>

            <div className={styles.cat_item}>
              <div className={styles.item_container}>
                    <div className={styles.icon_box}>
                        <TvOutlinedIcon className={styles.cat_icon}/>
                    </div>
                      <div  className={styles.name_space}>
                          <span className={styles.cat_name}>Property</span>
                      </div>
                      <div className={styles.downIcon_space}>
                          <KeyboardArrowDownOutlinedIcon className={styles.arrow_down}/>
                      </div>
              </div> 
            </div>
            
            <div className={styles.cat_item}>
              <div className={styles.item_container}>
                    <div className={styles.icon_box}>
                        <TvOutlinedIcon className={styles.cat_icon}/>
                    </div>
                      <div  className={styles.name_space}>
                          <span className={styles.cat_name}>Others</span>
                      </div>
                      <div className={styles.downIcon_space}>
                          <KeyboardArrowDownOutlinedIcon className={styles.arrow_down}/>
                      </div>
              </div> 
            </div>
        </div>

        <div className={styles.cat_container}>
      
        {/* <img class="rounded" src="../public/assets/images/slider-banner.svg"/> */}
          <div className={styles.cat_container_text}>
          <h2 className={styles.cat_container_title} >Comsumer Electronics</h2>
            <p className={styles.cat_container_paragraph}>Consectetur adipisicing elit, sed do eiusmod tempor</p>
            <Space wrap>
            <Button type="primary" danger> Explore Category</Button>
            </Space>

          </div>

        </div>
        
        <div className={styles.cat_widget}>
            <div className={styles.cat_widget_card}>
                <div className={styles.shop_icon}>
                    <StorefrontIcon  sx={{ fontSize: 40  }} />
                </div>
                <span className={styles.widget_shop_text}>Start Shopping with us</span>
                <div className={styles.widget_buttons}>
                    <Button className={styles.user_btn}>sign in</Button>
                    <Button className={styles.user_btn} type="primary" danger>sign up</Button>
                </div>
             </div>

             
             <div className={styles.cat_widget_card}>
            <div className={styles.cat_widget_card}>
                <div className={styles.shop_icon}>
                    <StorefrontIcon  sx={{ fontSize: 40  }} />
                </div>
                <span className={styles.widget_shop_text}>Unlimited Discounts on most of our products </span>
              
             </div>
            </div>


            <div className={styles.cat_widget_card}>
            <div className={styles.cat_widget_card}>
                <div className={styles.shop_icon}>
                    <StorefrontIcon  sx={{ fontSize: 40  }} />
                </div>
                <span className={styles.widget_shop_text}>24/7 live support through live chat</span>
              
             </div>
            </div>


        </div>

    </div>
  )
}

export default Category