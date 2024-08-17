import React from 'react'
import '../styles/projects.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'




function Card({img,name,detail,btnText,btnUrl}) {
    return (
        <motion.div className='card' whileHover={{scale:1.05,}} >

            <div className='pro-main'>
                <div className='pro-img-1'>
                    <img src={img} alt="" />
                </div>
                <div className='pro-details-1'>
                    <h3>{name}</h3>
                    <p>{detail}</p>
                    <button className='button-85' role='button'><Link style={{color:'white'}} to={btnUrl}>{btnText}</Link></button>
                </div>
            </div>

        </motion.div >
    )
}

export default Card