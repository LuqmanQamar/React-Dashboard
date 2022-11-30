import React from 'react'
import Chart from '../../Charts/Chart'
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../WidgetLarge/WidgetLg'
import WidgetSm from '../../WidgetSmall/WidgetSm'
import "./home.css"

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
