import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWi1usda5OqelxzJkVMLf8UAtSu4gBuBrymg&usqp=CAU" alt='' />
                <Avatar className='sidebar__avatar' />
                <h2>Sanskriti Gupta</h2>
                <h4>sanskriti.21gupta@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar