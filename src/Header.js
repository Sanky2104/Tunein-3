import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        
        <div className="header__left">
            <img src='/images/tunein.png' alt=""/>
            <div className="header__search">
                <SearchIcon />
                <input type='text' />
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon = {HomeIcon} title='Home' />
            <HeaderOption Icon = {SupervisorAccountIcon} title= 'My Network'/>
            <HeaderOption Icon = {BusinessCenterIcon} title= 'Jobs'/>
            <HeaderOption Icon = {ChatIcon} title= 'Messaging'/>
            <HeaderOption Icon = {NotificationsIcon} title= 'Notifications'/>
            <HeaderOption avatar = "https://i.pinimg.com/736x/59/b4/f3/59b4f3b37189dcb0d6fa3e63191a5e2e.jpg" title='me' />
        </div>
    </div>
  )
}

export default Header