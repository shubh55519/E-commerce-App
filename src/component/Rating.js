import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const Rating = ({ onClick, ratings, style }) => {

    console.log(ratings);
    return (
        <div>
            {[...Array(5)].map((i) => (
                <span key={i} onClick={() => onClick(i)} style={style}>
                    {ratings > i ? (
                        <AiFillStar fontSize='15px' />
                    ) : (
                        <AiOutlineStar fontSize='15px' />
                    )}
                </span>
            ))}
        </div >
    )
}

export default Rating;
