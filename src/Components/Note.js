import React from 'react'
import Tag from './Tag'
import './Note.css'

const Note = () => {
  return (
    <div className="noteCont">
        <div className='imgCont'>
            {/* <img src="" alt="" /> */}
            <p>IMAGE</p>
        </div>
        <div className='description'>
            <p className='heading'>XYZ</p>
            <p className='authorName'>XYZ</p>
            <span><Tag text="IFS" /><Tag text="IAS" /><Tag text="INDIA" /></span>
            <span>
                <img src="" alt="starImage" /> 145
            </span>
        </div>
    </div>
  )
}

export default Note
