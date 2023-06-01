import React from 'react';
import Tag from './Tag';
// import {KeyboardDoubleArrowLeftIcon} from '@mui/icons-material/KeyboardDoubleArrowLeft';

export default function ReviewBox() {
    return (
        <div className='review-box'>
            {/* <KeyboardDoubleArrowLeftIcon/> */}
            <div className='pdf-title'><span className='title'>UPSC IFS hrkfudsjml| isakjdxmlwhwajoSALiK | kqjudshcnwjehdaihdnkjk</span></div>
            <div className='tag-box'>
                <Tag tagname="IFS" />
                <Tag tagname="IFS" />
                <Tag tagname="IFS" />
            </div>
            <div className='flex-container'>
                <div className='total-pages'>15 Pages</div>
                <div className='dot'></div>
                <div className='date'>12/04/2023</div>
            </div>
            <hr/>
            <div className='reviews'>
            <div>Reviews & Comments</div>
            <div>5 Stars</div>
            <input type = "text" placeholder='Your post' className='post-input'></input>
            <button className='post-button'> Post</button>
            <div className='more-reviews'></div>
            </div>
        </div>
    )
}