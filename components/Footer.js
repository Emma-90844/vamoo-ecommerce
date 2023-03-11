import React from 'react';
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
  return (
    <>
    <div className={styles.container}>

      <div className={styles.upper_section}>
      <div className={styles.left_side}>
        <div className={styles.footer_logo}>
            <Image
              src="/../public/camera-white.png"
              width={50}
              height={50}
              className={styles.logo_icon}
            />
            <span className={styles.logo_text}>vamoo</span>
          </div>
           <p className={styles.footer_text}>Some short text about company like You might remember the Dell <br/> computer commercials in which a youth reports this exciting news to his friends.</p>

           <div className={styles.social_links}>
              <FacebookIcon className={styles.social_link}/>
              <GoogleIcon className={styles.social_link}/>
              <TwitterIcon className={styles.social_link}/>
              <YouTubeIcon className={styles.social_link}/>
           </div>
        </div>

        <div className={styles.right_side}>
           <div className={styles.footer_col}>
            <h1 className={styles.footer_h1}>About</h1>
            <a href="" className={styles.link}>About Us</a>
            <a href="" className={styles.link}>Services</a>
            <a href="" className={styles.link}>Rules adn terms</a>
            <a href="" className={styles.link}>Bolgs</a>
           </div>


           <div className={styles.footer_col}>
           <h1 className={styles.footer_h1} >Services</h1>
            <a href="" className={styles.link}>Help center</a>
            <a href="" className={styles.link}>Money refund</a>
            <a href="" className={styles.link}>Terms and Policy</a>
            <a href="" className={styles.link}>Open dispute</a>
           </div>
           <div className={styles.footer_col}>
           <h1 className={styles.footer_h1}>For Users</h1>
            <a href="" className={styles.link}>For Us</a>
            <a href="" className={styles.link}>User login</a>
            <a href="" className={styles.link}>User registration</a>
            <a href="" className={styles.link}>Account Setting</a>
            <a href="" className={styles.link}>My Whilshlist</a>
           </div>
           <div className={styles.footer_col}>  <h1 className={styles.footer_h1}>Our app</h1>
            {/* <a href="" className={styles.link }>About Us</a> */}
            <Image
              src="/../public/misc/appstore.png"
              width={50}
              height={50}
              className={styles.app_logo}
            />
            <Image
              src="/../public/misc/playmarket.png"
              width={50}
              height={50}
              className={styles.app_logo}
            />
            </div>
        </div>
      </div>

      <hr className={styles.footer_line}/>

      <div className={styles.lower_section}>
        <div className={styles.lower_left_side}>
            <p>© 2023 Company All rights reserved</p>
        </div>
        <div className={styles.lower_right_side}>
            <p>Privacy Cookies </p>
          <p>Accessibility</p>
        </div>
      </div>
    </div>


</>
  )
}

export default Footer