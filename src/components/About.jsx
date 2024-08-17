import React from 'react'
import photo1 from '../assets/photo1.jpg'
import '../styles/about.scss'
import { TypeAnimation } from 'react-type-animation';
import {about} from '../constants'

function About() {

  return (
    <div className='about'>


      <div className='MyPhoto'>

        <img src={photo1} alt="" />

      </div>

      <div className='description'>
        <h1>Who I am?</h1>
        <TypeAnimation className='p'
        splitter={(str) => str.split(/(?= )/)} 
        sequence={[
          `${about[0].aboutMe}`,
          3000,
          '',
        ]}
        speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
        omitDeletionAnimation={true}
        style={{color:'white'}}
        repeat={Infinity}
      />
       

      </div>


    </div>
  )
}

export default About
