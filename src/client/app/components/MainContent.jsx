import React from 'react';

const MainContent = (props) => {
    return (
        <div className="main-content">
            <div className="main-content-inner">
                <div className="page-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default MainContent;