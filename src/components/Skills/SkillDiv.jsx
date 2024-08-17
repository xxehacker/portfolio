
import React from 'react'
import '../../styles/skillStyles/skillDiv.scss'
import { motion } from "framer-motion"


function SkillDiv({ imgUrl, name ,reference}) {

   
    return (
        <motion.div className='skillDiv' drag dragConstraints={reference} whileDrag={{scale:1.1}} > 

            <div className='top'>
                <img src={imgUrl} alt="lang" />
            </div>
            <div className='buttom'>
                <h3>{name}</h3>
            </div>

        </motion.div>
    )
}

export default SkillDiv