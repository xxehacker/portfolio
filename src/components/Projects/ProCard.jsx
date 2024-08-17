import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/allprojects.scss'

function ProCard({imgUrl ,tag,title,desc,btnlink,style}) {
  return (
    <div className='procard' style={style}>

        <div className='pro-img'>
            <img src={imgUrl} alt="" />
        </div>
        <div className='pro-details'>
            
            <h3>{tag}</h3>
            <h2>{title}</h2>
            <p>{desc}</p>
            <button><Link to={btnlink}>view project</Link></button>

        </div>

    </div>
  )
}

export default ProCard