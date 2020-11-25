import React from 'react';
import '../App.css';
import config from '../config.json';

const Windows = () => {

    const allDays = config.days;

    const daysWindow = allDays.map(days => {
        return (
            <li className="Window-box">
                <div>
                    <h3>{days.day}</h3>
                </div>
            </li>
        )
    })

    return (
        <div className="Windows-all">
            <ul>
                {daysWindow}
            </ul>
        </div>
    );
}
 
export default Windows;