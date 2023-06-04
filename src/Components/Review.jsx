import React from 'react';
import Tag from './Tag';
// import {KeyboardDoubleArrowLeftIcon} from '@mui/icons-material/KeyboardDoubleArrowLeft';

export default function ReviewBox() {
    return (
        <div className='review-box flex flex-col justify-around items-center mt-16 bg-white mx-auto rounded-lg'>
            {/* <KeyboardDoubleArrowLeftIcon/> */}
            <div className='pdf-title'><span className='title font-Roboto'>UPSC IFS hrkfudsjml| isakjdxmlwhwajoSALiK | kqjudshcnwjehdaihdnkjk</span></div>
            <div className='tag-box'>
                <Tag tagname="IFS" />
                <Tag tagname="IFS" />
                <Tag tagname="IFS" />
            </div>
            <div className='flex-container flex justify-around items-center font-Roboto mt-4'>
                <div className='total-pages'>15 Pages</div>
                <div className='dot w-2 h-2 bg-orange-500 rounded-full'></div>
                <div className='date'>12/04/2023</div>
            </div>
            <hr className='text-gray-200 w-10/11 h-[1px]'/>
            <div className='reviews  flex flex-col justify-around items-start font-Roboto mt-4'>
                <div>Reviews & Comments</div>
                <div>5 Stars</div>
                <input type = "text" placeholder='Your post' className='post-input w-92.5 border-orange-500 rounded-md h-12 w-full p-2'></input>
                <button className='post-button my-2 p-2 bg-orange-500 text-xs text-white rounded-lg font-Roboto text-center'> Post</button>
                <div className='more-reviews'></div>
            </div>
            <div className='w-full flex justify-between items-center font-Roboto m-4 p-4'>
                <div>Reviews</div>
                <div className='post-button bg-orange-500 text-xs text-white rounded-full font-Roboto text-center w-6'>-</div>
            </div>
        </div>
    )
}