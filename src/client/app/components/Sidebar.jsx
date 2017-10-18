import React from 'react';

export const Sidebar = (props) => {
    return (
        <div id="sidebar" className="sidebar                  responsive                    ace-save-state">
            <ul className="nav nav-list">
                {props.children}
            </ul>
            <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
				<i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
			</div>
        </div>
    )
};

export const SidebarItem = (props) => {
    return (
        <li className="">
            <a href={props.link}>
                <i className={"menu-icon fa "+props.icon}></i>
                <span className="menu-text">{props.title}</span>
            </a>

            <b className="arrow"></b>
        </li>
    )
};

export const SidebarItemSub = (props) => {
    return (
        <li className="">
            <a href="#" className="dropdown-toggle">
                <i className={"menu-icon fa "+props.icon}></i>
                <span className="menu-text">
                   {props.title} 
                </span>

                <b className="arrow fa fa-angle-down"></b>
            </a>

            <b className="arrow"></b>

            <ul className="submenu">
                {props.children}
            </ul>
        </li>
    )
}

