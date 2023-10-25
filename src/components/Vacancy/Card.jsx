import React from 'react'
import {motion} from 'framer-motion'

const Card = ({ title, pos, location, salary }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="card"
    >
      <h1>{title}</h1>
      <ul>
        <li>{pos}</li>
        <li>
          {location}
        </li>
        <li>{salary}</li>
      </ul>
    </motion.div>
  )
}

export default Card