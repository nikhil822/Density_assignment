import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import "./Overview.css";
import phone from "../../assets/phone.json";
import stars from "../../assets/stars.json";
import download from "../../assets/download-appstore.png";

const Overview = () => {
  return (
    <div className="container">
      <div className="container-item">
        <motion.div
          className="left"
          initial={{ x: -50, opacity: 0.1 }}
          whileInView={{ x: 50, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h4>Ahead App</h4>
          <h1>
            Master your life <br />
            by mastering <br />
            emotions
          </h1>
          <div className="download-app">
            <img
              src={download}
              alt="app-store"
              style={{ width: "124px", height: "45px" }}
            />
            <span className="starsReview">
              <Lottie
                style={{ width: "24%", height: "24%" }}
                animationData={stars}
                loop={false}
              />
              <h6>100+ Appstore Reviews</h6>
            </span>
          </div>
        </motion.div>
        <motion.div className="right">
          <Lottie
            style={{ width: "450px", height: "450px" }}
            animationData={phone}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
