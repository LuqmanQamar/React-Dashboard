import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        {
            name: 'Jan',
            "Active User": 4000,
        },
        {
            name: 'Feb',
            "Active User": 7000,
        },
        {
            name: 'March',
            "Active User": 5000,
        },
        {
            name: 'April',
            "Active User": 4000,
        },
        {
            name: 'May',
            "Active User": 3000,
        },
        {
            name: 'June',
            "Active User": 4000,
        },
        {
            name: 'July',
            "Active User": 1000,
        },
        {
            name: 'Aug',
            "Active User": 2000,
        },
        {
            name: 'Sep',
            "Active User": 4000,
        },
        {
            name: 'Oct',
            "Active User": 7000,
        },
        {
            name: 'Nov',
            "Active User": 6000,
        },
        {
            name: 'Dec',
            "Active User": 5000,
        }

    ];

    return (
        <div className='chart'>
            <h3 className="chartTitle">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
                    <Tooltip />
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
