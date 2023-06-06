import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

const LeftSide = () => {
    return (
        <>
           
                    <div className="bg-light py-3 shadow-lg px-3 rounded-4 ">
                        <h1 className="text-xl font-bold">I have a property I rent out occasionally</h1>
                        <p className="text-sm my-6" > <CheckIcon/> This property is where I keep my personal belongings</p>
                        <p className="text-sm my-6" > <CheckIcon/> I have limited experience working in the hospitality industry</p>
                        <button className = "btn btn-outline-primary">Learn More</button>
                    </div>
               
        </>
    );
};

export default LeftSide;

