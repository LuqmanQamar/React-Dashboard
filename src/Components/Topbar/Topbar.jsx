import React from 'react'
import "./topbar.css"
import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import avatar from "../Topbar/imgs/garden-19830_1280.jpg"
// import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="toleft">
                    <span className="logo">Luqman</span>
                </div>
                <div className="toright">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={avatar} alt="" className='topAvatar' />
                </div>
            </div>

        </div>
    )
}
