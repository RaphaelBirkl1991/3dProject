import React from 'react'
// import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
   <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
      options={{
        max: 45, 
        scale: 1, 
        speed: 450
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' 
      >
<img src={icon} alt={title}
className='w-16 h-16 object-contain'/>
<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Einleitung</p>
        <h2 className={styles.sectionHeadText}>Übersicht.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-full leading-[30px]"
      >
        Wie du bestimmt schon mitbekommen hast, nehmen die Übergriffe auf Sicherheitspersonal stetig zu. Viele von euch arbeiten alleine. 
        Aber auch mit einem Kollegen gemeinsam ist man schnell in der Unterzahl. 
        Was machst du bisher? Höchstwahrscheinlich in deiner Leitstelle Bescheid geben. Die wiederum entscheidet ob sie weitere eigene Kräfte oder die Polizei hinzuzieht.
        An diesem Vorgehen ist auch absolut nichts falsch. Jedoch könnte man noch mehr machen. Zumindest mit dem richtigen Werkzeug.

        Übrigens; ich habe auch viele Jahre in der privaten Sicherheit gearbeitet.

      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
         ))}

      </div>
    </>
  )
}
export default SectionWrapper (About, "about")
