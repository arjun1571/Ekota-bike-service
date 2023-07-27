import React from 'react';
import fubike from "../../asset/fu1 (1).png"
import fubike1 from "../../asset/fu5.png"
import fubike2 from "../../asset/fu1 (3).png"
const LatestNews = () => {
    return (
        <div className=' mb-10'>
            <h1 className='text-center lg:text-4xl md:text-4xl  text-2xl lg:mt-20 mb-10 mt-10 font-bold'>Latest News</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center justify-between lg:p-10 p-7'>
                <div>
                    <img src={fubike} alt="" />
                </div>
                <div>
                    <img src={fubike1} alt="" />
                </div>
                <div>
                    <img src={fubike2} alt="" />
                </div>

            </div>
        </div>
    );
};

export default LatestNews;