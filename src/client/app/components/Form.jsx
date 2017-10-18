import React from 'react';

export const Form = (props) => {
    return (
        <form className="form-horizontal" role="form">
            {props.children}
        </form>
    )
};

export const TextField = (props) => {
    return (
        <div className="form-group">
            <label className="col-sm-3 control-label no-padding-right" htmlFor={props.id}> {props.label} </label>

            <div className="col-sm-9">
                <input type="text" id={props.id} placeholder={props.placeholder} onChange={(e) => {
                    props.onchange(e.target.value);
                }} className="col-xs-10 col-sm-5" value={props.value} />
                <span className="help-inline col-xs-12 col-sm-7">
                    <span className="middle">{props.inline}</span>
                </span>
            </div>
        </div>
    )
};

export const PassField = () => {
    return (
        <div className="form-group">
            <label className="col-sm-3 control-label no-padding-right" htmlFor={props.id}> {props.label} </label>

            <div className="col-sm-9">
                <input type="password" id={props.id} placeholder={props.placeholder} onChange={(e) => {
                    props.onchange(e.target.value);
                }} className="col-xs-10 col-sm-5" value={props.value} />
                <span className="help-inline col-xs-12 col-sm-7">
                    <span className="middle">{props.inline}</span>
                </span>
            </div>
        </div>
    )
}