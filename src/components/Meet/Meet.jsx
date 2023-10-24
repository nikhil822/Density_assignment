import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import girlCyclingAnimation from "../../assets/girl-cycling-in-autumn.json";
import "./Meet.css";

const Meet = () => {
  return (
    <div className="container">
      <div className="containerItem">
        <motion.div
          className="left"
          initial={{ x: -200, opacity: 0.1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h4>Built out of frustration</motion.h4>
          <motion.h2>Meet the ahead app</motion.h2>
          <Lottie
            style={{ width: "600px", height: "500px" }}
            animationData={girlCyclingAnimation}
          />
        </motion.div>
        <div className="right">
          <motion.h5
            initial={{ y: 150, opacity: 0.1 }}
            whileInView={{ y: 0, opacity: 0.6 }}
            transition={{ duration: 0.8 }}
          >
            A personalised pocket coach that provides bite-
            <br /> sized, science-driven tools to boost emotional <br />{" "}
            intelligence .
            <br /> Think of it as a pocket cheerleader towards a<br /> better,
            more fulfilling.
          </motion.h5>
        </div>
      </div>
    </div>
  );
};

export default Meet;
