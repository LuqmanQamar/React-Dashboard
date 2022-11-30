import React from 'react'
import "./widgetLg.css"
import userOne from "./imgs/6-69524_download-full-hd-wallpapers-for-pc-collection-road.jpg"
import userTwo from "./imgs/pauline-heidmets-GTL39WM6QqA-unsplash.jpg"

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgtr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={userOne} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Luqman</span>
                    </td>
                    <td className="widgetLgDate">7 April 22</td>
                    <td className="widgetLgAmount">$124.98</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={userTwo} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mehmood</span>
                    </td>
                    <td className="widgetLgDate">7 April 22</td>
                    <td className="widgetLgAmount">$124.98</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={userOne} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Rabeel</span>
                    </td>
                    <td className="widgetLgDate">7 April 22</td>
                    <td className="widgetLgAmount">$124.98</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={userTwo} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">jassica</span>
                    </td>
                    <td className="widgetLgDate">7 April 22</td>
                    <td className="widgetLgAmount">$124.98</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}
