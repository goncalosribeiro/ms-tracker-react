import React from 'react';
import rating from '../assets/images/rating.png';
import noPoster from '../assets/images/no_poster.png';


const Card = ({ title, tagline, ratePercent, id, imageUrl, rate, year }) => {
    imageUrl = imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : noPoster;
    return (
        <div className='item' id={year}>
            <a href='/'>
                <div className='item-img'>
                    <img src={imageUrl} alt='movie poster' />
                </div>
                <div className='item-description'>
                    <div className='item-rate'>
                        <div className='progress-container'>
                            <div className='progress-rate' style={{ width: `${ratePercent}%` }}></div>
                        </div>
                        <img src={rating} alt='rating stars' />
                        <div className='rate-value'>
                            <p>{rate}</p>
                        </div>
                    </div>
                    <div className='text-content'>
                        <p className='item-title'>{title}</p>
                        <p className='item-tagline'>The Adventure Continues...</p>
                        <p className='item-year'>{year}</p>
                    </div>
                </div>
            </a>
        </div>

    )
};
export default Card;