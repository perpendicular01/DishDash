import React from 'react';

const SectionTitle = ({heading, description}) => {
    return (
        <div className='text-center md:w-4/12 mx-auto mb-9'>
            <p className='text-[#9c700b] italic text-sm mb-2 font-medium'> {description}</p>
            <h2 className='text-black text-2xl uppercase border-y-3 font-medium border-gray-300 py-2'> { heading}</h2>
            
        </div>
    );
};

export default SectionTitle;