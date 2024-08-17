import React from 'react'
import '../styles/projects.scss'
import Card from './Card'
import { projects } from '../constants'
import { Link } from 'react-router-dom'


function Projects() {
  return (
    <div className='projects'>

      <div className='top'>
        <h1>Projects</h1>
      </div>
      <div className='buttom'>
        <Card img={projects[0].img} name={projects[0].name} detail={projects[0].detail} btnText={projects[0].btnText} btnUrl={projects[0].btnUrl}/>
        <Card img={projects[2].img} name={projects[2].name} detail={projects[2].detail} btnText={projects[2].btnText} btnUrl={projects[1].btnUrl}/>
        <Card img={projects[1].img} name={projects[1].name} detail={projects[1].detail} btnText={projects[1].btnText} btnUrl={projects[2].btnUrl} />
      </div>

      <div className='more-btn-div'>

        <button className="animated-button" style={{fontSize:'1rem'}}>
          <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span className="text"><Link to={'/projects'}>More Projects</Link></span>
          <span className="circle"></span>
          <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </button>

      </div>

    </div>
  )
}

export default Projects