import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import manPlayingGuitar from "../../assets/83758-man-playing-a-guitar.json";
import "./WorkWithUs.css";

const WorkWithUs = () => {
  const cardsData = [
    {
      title: "Power through, even when the going gets tough",
      description:
        "We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",
    },
    {
      title: "Overcome obstacles and achieve your goals",
      description:
        "Our strategies and guidance empower you to overcome obstacles and reach your goals effectively.",
    },
    {
      title: "Unlock your full potential and excel",
      description:
        "We provide the tools and support needed to unlock your full potential and excel in all areas of life.",
    },
    {
      title: "Build confidence and conquer self-doubt",
      description:
        "Our programs are designed to build your confidence and help you overcome self-doubt for lasting personal growth.",
    },
    {
      title: "Discover inner strength and resilience",
      description:
        "Through our guidance, you'll discover your inner strength and resilience to face any challenge with determination.",
    },
    {
      title: "Cultivate positive habits for success",
      description:
        "We assist you in cultivating positive habits that lead to success, enabling you to create a fulfilling life.",
    },
    {
      title: "Harness your creativity and think outside the box",
      description:
        "Our methods encourage creative thinking and help you harness your imagination to find innovative solutions.",
    },
    {
      title: "Achieve work-life balance and live harmoniously",
      description:
        "We support you in achieving a healthy work-life balance, allowing you to live a harmonious and fulfilling life.",
    },
  ];

  return (
    <div className="container">
      <div className="containerItem">
        <div className="left">
          <motion.div
            initial={{ x: -200, opacity: 0.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2>Work with us</motion.h2>
          </motion.div>
          <div className="box">
            <div className="margin">
              <div>
                <Lottie
                  style={{
                    width: "80px",
                    height: "80px",
                    position: "relative",
                    right: "10px",
                  }}
                  animationData={manPlayingGuitar}
                  loop={true}
                  id="leaves-logo"
                />
              </div>
              <motion.div
                id="about"
                className="box-one"
                whileHover={{ scale: 1.13 }}
              >
                <motion.h4>About</motion.h4>
                <h5>
                  At ahead our goal is to make self-
                  <br />
                  improvement fun and lasting. we know there's <br />a way to
                  make it work. And thats's what <br />
                  aHead is all about!
                </h5>
              </motion.div>
              <motion.div
                id="product"
                className="box-two"
                whileHover={{ scale: 1.13 }}
              >
                <h4>Product</h4>
                <h5>
                  Sure, you can spend ages redaing books or <br /> sitting on
                  seminers on how to become a better <br />
                  spouse, parent or manager - like we did.
                </h5>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="right">
          <motion.div
            className="ahead"
            initial={{ x: 100, opacity: 0.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2>ahead</motion.h2>
          </motion.div>
          <div className="box">
            <div className="work-carousel">
              {cardsData.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
