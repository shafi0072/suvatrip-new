import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import RightSide from './RightSide'
import LeftSide from './LeftSide';


const index = () => {
    return (
        <div className="bg-gray-200 py-4">
            <div className="container">
                <h1 className="text-3xl font-bold">Which best describes you?</h1>
                <p className="text-sm">Select one of the options to see customized info</p>
                <div className="row my-4">
                    <div className="col-md-6">
                        <LeftSide />
                    </div>
                    <div className="col-md-6">
                        <RightSide />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;