import React from 'react'
import '../../styles/educations/educard.scss'
import { IoIosContact } from 'react-icons/io'

function EduCard({ year, course, college }) {
    return (
        <div className='educard'>


            <div className='innertop'>
                <h2>{year}</h2>
            </div>
            <div className='innerbottom'>

                <div className='icon-left'>

                    <IoIosContact size={"2rem"} />

                </div>
                <div className='details-right'>

                    <h1>{course}</h1>
                    <p>{college}</p>

                </div>

            </div>

        </div>
    )
}

export default EduCard