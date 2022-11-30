import React from 'react'
import "./widgetSm.css"
import userOne from "./imgs/woman-1063100_1280.jpg"
import userTwo from "./imgs/woman-3083401_1280.jpg"
import { Visibility } from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={userOne} alt="" className="widgetSmimage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jessica</span>
                        <span className="widgetSmUserTitle">HR</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={userTwo} alt="" className="widgetSmimage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ramsha</span>
                        <span className="widgetSmUserTitle">Artist</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={userOne} alt="" className="widgetSmimage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Radka</span>
                        <span className="widgetSmUserTitle">Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={userTwo} alt="" className="widgetSmimage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Eliska</span>
                        <span className="widgetSmUserTitle">Student</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={userOne} alt="" className="widgetSmimage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Katherine</span>
                        <span className="widgetSmUserTitle">Designer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon' />Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
