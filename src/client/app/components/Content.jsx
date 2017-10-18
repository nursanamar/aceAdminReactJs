import React from 'react';

const Content = (props) => {
    return (
        <div className="row">
            <div className="col-xs-12">
                {props.children}
            </div>
        </div>
    )
};

export default Content;