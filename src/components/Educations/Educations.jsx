import React from 'react'
import '../../styles/educations/educations.scss'
import EduCard from './EduCard'
import {education} from '../../constants'


function Educations() {
  return (
    <div className='educations'>

        <h1>Educations</h1>

      <div className='inner-div'>


        <div className='left'>


          <img src={education[0].img} alt="" />


        </div>

        <div className='right'>

          <EduCard year={education[1].year} course={education[1].course} college={education[1].clgName} />
          <EduCard  year={education[2].year} course={education[2].course} college={education[2].clgName}/>
          <EduCard  year={education[3].year} course={education[3].course} college={education[3].clgName}/>
          

        </div>


      </div>




    </div>
  )
}

export default Educations