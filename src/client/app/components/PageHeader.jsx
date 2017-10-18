import React from 'react';

const PageHeader = (props) => {
    return (
        <div className="page-header">
            <h1>
                {props.title}
            <small>
                    <i className="ace-icon fa fa-angle-double-right"></i>
                    {props.desc}
            </small>
            </h1>
        </div>
    )
};

export default PageHeader;