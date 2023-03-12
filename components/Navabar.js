import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DehazeIcon from "@mui/icons-material/Dehaze";
import StorefrontIcon from '@mui/icons-material/Storefront';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

// ant design imports
import { CaretDownOutlined} from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';


const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
  {
    label: 'About us',
    key: '1',
  },
  {
    label: 'FAQ',
    key: '2',
  }
];

const langItems = [
  {
    label: 'About us',
    key: '1',
  },
  {
    label: 'FAQ',
    key: '2',
  }
];

function Navabar() {

  
  return (
    <div className={styles.nav}>
      {/* navbar */}
      <div className={styles.navbar}>
        <div className={styles.navbar_main}>
          <div className={styles.navbar_left}>
            <Image
              src="https://res.cloudinary.com/student90844/image/upload/v1678611683/favicon_fhd8bn.ico"
              width={50}
              height={50}
              className={styles.logo}
            />
            <span className={styles.logo_text}>vamoo</span>
          </div>

          <div className={styles.navbar_center}>
            <input
            
              className={styles.navbar_input}
              placeholder="Search anything"
            />
          </div>

          <div className={styles.navbar_right}>
            <div className={styles.navbar_icon}>
              <PermIdentityIcon
                style={{ color: "gray", fontWeight: "bold" }}
                className={styles.icon}
              />
              <p className={styles.nav_icon_text}>My Profile</p>
            </div>
            <div className={styles.navbar_icon}>
              <NotificationsNoneIcon
                style={{ color: "gray" }}
                className={styles.icon}
              />
              <p className={styles.nav_icon_text}>Notifications</p>
            </div>
            <div className={styles.navbar_icon}>
              <ShoppingCartOutlinedIcon
                style={{ color: "gray" }}
                className={styles.icon}
              />
              <p className={styles.nav_icon_text}>Cart</p>
            </div>
          </div>
        </div>

        {/* navbar header */}
      </div>

      {/* nav header */}
      <div className={styles.nav_header}>
        <div className={styles.nav_header_left}>
          <div className={styles.genre}>
            <DehazeIcon className={styles.genre_icon}/>
            Genre
          </div>

          <span  className={styles.store} >
          <StorefrontIcon className={styles.store_icon}/>
            Shop</span>
        </div>
    {/* nav header right */}
        <div className={styles.nav_header_right}>
         <Dropdown menu={{ items, onClick, }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                   Pages
                  <CaretDownOutlined className={styles.down_icon}/>
                </Space>
              </a>
         </Dropdown>

         <Dropdown menu={{ items, onClick, }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  English
                  <CaretDownOutlined className={styles.down_icon}/>
                </Space>
              </a>
         </Dropdown>
      


         

          
         <div className={styles.display_mode_icon} ><DarkModeOutlinedIcon className={styles.mode_icon}/></div>
          
        </div>
      </div>
    </div>
  );
}

export default Navabar;
