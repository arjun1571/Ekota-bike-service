import React from 'react';
import fubike from "../../asset/futurebike (1).png"
const NewBike = () => {
    return (
        <div className=' mb-10'>
            <h1 className='text-center lg:text-4xl md:text-4xl  text-2xl lg:mt-20 mt-10 font-bold'>Fetured Bikes In This Year</h1>
            <p className='text-center  font-bold mt-2 text-red-700'>Best Bike collection</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center justify-between lg:p-10 p-7'>
                <div>
                    <img src={fubike} alt="" />
                </div>
                <div>
                    <img src={fubike} alt="" />
                </div>
                <div>
                    <img src={fubike} alt="" />
                </div>

            </div>
        </div>
    );
};

export default NewBike;