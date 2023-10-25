import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import char from '../../assets/boo.png'
import "./Timeline.css";

const Timeline = () => {
  return (
    <section className="container">
      <motion.p
        initial={{ x: "-200", scale: 0, opacity: 0 }}
        s
        transition={{
          delay: 0.5,
          duration: 0.8,
          type: "spring",
          stiffness: 50,
        }}
        whileInView={{ x: 0, scale: 1, opacity: 1 }}
        className="sub-heading "
      >
        Wrong with self-improvement & how we're fixing it.
      </motion.p>

      <div className="start">
        <motion.h1
          initial={{ x: "-200", scale: 0, opacity: 0 }}
          transition={{
            duration: 0.8,
          }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          className="heading"
        >
          Self Improvement. Ugh.
        </motion.h1>

        <motion.div
          initial={{ rotate: -90, x: 400, y: 20 }}
          whileInView={{
            rotate: 0,
            x: 0,
            y: 0,
          }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <img
            src={char}
            width={80}
            height={80}
            alt="boo"
            className="char-img"
          />
        </motion.div>
      </div>

      <div className="layout">
        <VerticalTimeline layout={"1-column-left"} lineColor={"#C3B6F9"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "#FAF8FF",
              borderBottom: "none ",
              borderRadius: "15px",
            }}
            iconStyle={{ background: "rgb(45, 30, 99)", color: "#000" }}
            icon={<span>🧠</span>}
            iconClassName="element"
          >
            <h3 className="vertical-timeline-element-title">
              It’s not as easy as 1-2-3.
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-[#535353] font-medium text-sm">
              The journey of change may be long, but our sessions are quick. We
              get to the point and tell you what you want to know (and nothing
              else).
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            contentStyle={{
              background: "#FAF8FF",
              borderBottom: "none ",
              borderRadius: "15px",
            }}
            iconStyle={{ background: "rgb(45, 30, 99)", color: "#000" }}
            icon={<span>🏋️</span>}
            iconClassName="element"
          >
            <h3 className="vertical-timeline-element-title">
              Old habits are hard to break.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              And bad behaviors die hard. Fortunately, we give you great,
              science-backed techniques to use (instead of shouting at your
              boss).
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            contentStyle={{
              background: "#FAF8FF",
              borderBottom: "none ",
              borderRadius: "15px",
            }}
            iconStyle={{ background: "rgb(45, 30, 99)", color: "#000" }}
            icon={<span>💡</span>}
            iconClassName="element"
          >
            <h3 className="vertical-timeline-element-title">
              You and your motivation don’t have a long-term relationship.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Luckily, we can proactively prepare you for the marathon, not just
              the race. Effective, memorable exercises.
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            contentStyle={{
              background: "#FAF8FF",
              borderBottom: "none ",
              borderRadius: "15px",
            }}
            iconStyle={{ background: "rgb(45, 30, 99)", color: "#000" }}
            icon={<span>📖</span>}
            iconClassName="element"
          >
            <h3 className="vertical-timeline-element-title">
              Books just don’t offer practical solutions.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Remember when you learned to ride a bike just by reading? Yeah, we
              don’t either. We help you take concrete small steps towards your
              goals.
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
