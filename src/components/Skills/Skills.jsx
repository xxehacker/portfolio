import React from 'react'
import '../../styles/skillStyles/skills.scss'
import SkillDiv from './SkillDiv'
import { useRef , useEffect} from 'react';
import { skills } from '../../constants'


function Skills() {
  
  const ref = useRef(null);


  return (
    <div className='skills'>
        <div className='top'>
          <h1 style={{textAlign:'center'}}>Skills</h1>
        </div>
        <div ref={ref} className='buttom'>
            {
              skills.map((skill) => (  
              <SkillDiv  reference={ref} imgUrl={skill.img} name={skill.name}/>
              ))
            }

        </div>

    </div>
  )
}

export default Skills