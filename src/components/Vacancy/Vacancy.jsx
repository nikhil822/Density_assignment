import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import './Vacancy.css'

const Vacancy = () => {
  const VacanciesData = [
    {
      title: "Senior Engineer",
      pos: "Full Time Position",
      location: "Berlin or remote",
      salary: "€65-85k, 0.5-1.50% equity share options",
    },
    {
      title: "Senior Designer",
      pos: "Full Time Position",
      location: "Berlin or remote",
      salary: "€40-55k, 0.25-0.50% equity share options",
    },
    {
      title: "Superstar Intern",
      pos: "Full Time Position",
      location: "Berlin or remote",
      salary: "€20-24k, 0.5-1.50% equity share options",
    },
  ];

  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.6,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="container"
    >
      <div className="heading">
        <motion.h1
          initial={{ x: "-200", scale: 0, opacity: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="heading-h1"
        >
          Open Vacancies
        </motion.h1>
      </div>
      <div className="cards">
        {VacanciesData.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            pos={item.pos}
            location={item.location}
            salary={item.salary}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Vacancy;
