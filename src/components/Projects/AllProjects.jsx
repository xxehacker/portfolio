import React from 'react'
import '../../styles/allprojects.scss'
import { projects } from '../../constants'
import ProCard from './ProCard'


function AllProjects() {
  return (
    <div className='allprojects'>

      <div className='top'>
        <h1>Projects</h1>
      </div>
      <div className='buttom'>
        
        <ProCard imgUrl={projects[0].img} tag="Python Script" title={projects[0].name} desc={projects[0].detail} btnlink={projects[0].btnUrl}/>

          <ProCard imgUrl={projects[1].img} tag="Python Script" title={projects[1].name} desc={projects[1].detail} btnlink={projects[1].btnUrl} style={{ flexDirection: 'row-reverse' }} />

        <ProCard imgUrl={projects[2].img} tag="Python Script" title={projects[2].name} desc={projects[2].detail} btnlink={projects[2].btnUrl}  />
        
        
      </div>
    </div>
  )
}

export default AllProjects