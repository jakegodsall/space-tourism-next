import React from 'react';

const TechnologyItem = (props) => {
    return (
        <div>
            <div>
                <p className='uppercase text-[#d0d6f9] font-barlow'>The terminology</p>
                <p className='uppercase text-white font-bell'>{props.name}</p>
                <p className='text-[#d0d6f9] font-barlow'>{props.description}</p>
            </div>
        </div>
    );
};

export default TechnologyItem;
