import React from 'react'
import Logo from '../../../img/logo.png'
import "./LogoSearch.css";
import {UilSearch} from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt="" />
        <div className="search">
            <input type="text" name="search" id="search" placeholder='#Explore' />
            <div className="search-icon">
                <Link to={"/"}><UilSearch/></Link>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch