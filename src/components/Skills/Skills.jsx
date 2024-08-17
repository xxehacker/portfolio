import React from 'react'
import '../../styles/skillStyles/skills.scss'
import SkillDiv from './SkillDiv'
import { useRef , useEffect} from 'react';
import { skills } from '../../constants'


function Skills() {


  const ref = useRef(null);


  return (
    <div className='skills' >
        <div className='top'>
          <h1 style={{textAlign:'center'}}>Skills</h1>
        </div>
        <div ref={ref} className='buttom'>
            <SkillDiv  reference={ref} imgUrl={skills[0].img} name={skills[0].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[1].img} name={skills[1].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[2].img} name={skills[2].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[3].img} name={skills[3].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[4].img} name={skills[4].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[5].img} name={skills[5].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[6].img} name={skills[6].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[7].img} name={skills[7].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[8].img} name={skills[8].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[9].img} name={skills[9].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[10].img} name={skills[10].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[11].img} name={skills[11].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[12].img} name={skills[12].name}/>
            <SkillDiv  reference={ref} imgUrl={skills[13].img} name={skills[13].name}/>
        </div>

    </div>
  )
}

export default Skills