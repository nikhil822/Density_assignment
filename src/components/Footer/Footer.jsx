import React from "react";
import { motion } from "framer-motion";
import download from "../../assets/download-appstore.png";
import Lottie from "lottie-react";
import boyWorking from "../../assets/boy-working-on-laptop-lottie-animation.json";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./Footer.css";

const Footer = () => {
  return (
    <motion.section
      initial={{ x: -50, opacity: 0.1 }}
      transition={{
        duration: 1
      }}
      whileInView={{ x: 50, opacity: 1 }}
      className="container"
    >
      <div className="footer">
        <Lottie
          style={{ width: "75rem", height: "75px", marginLeft: "45px" }}
          animationData={boyWorking}
          loop={false}
        />
        <h1>ahead</h1>

        <div className="contacts">
          <div className="location">
            <LocationOnIcon sx={{width: '30', height: '30', marginRight: '0.5rem'}} />
            Level 5, Trifecta Adatto, Banglore
          </div>
          <div className="mail">
            <EmailIcon sx={{width: '30', height: '30', marginRight: '0.5rem'}} />
            hi@ahead-app.com
          </div>
        </div>
        <img
          src={download}
          alt="app-store"
          style={{ width: "124px", height: "40px", marginTop: '10px' }}
        />
        <p className="copyright">
          &copy; 2023 Ahead app.All rights reserved
        </p>
      </div>
    </motion.section>
  );
};

export default Footer;
