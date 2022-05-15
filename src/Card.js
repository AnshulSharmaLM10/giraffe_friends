import React from 'react';

const Card = ({gname, email, id, img}) => {
    return (
        <div className='bg-light-blue dib pd3 br3 ma2 bw2 shadow-5 grow'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{gname}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
