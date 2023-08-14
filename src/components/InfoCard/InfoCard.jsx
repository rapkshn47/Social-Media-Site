import React, { useState } from 'react'
import './InfoCard.css'
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../ProfileModal/ProfileModal.jsx'

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Personal Info</h4>
            <div>
               <UilPen width='2rem' height='1.2rem'
               onClick={()=>setModalOpened(true)}  />  
               <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
            </div>
        </div>
        <div className="info">
            <span>
                <b>Status: </b>
            </span>
            <span>
                in a Relationship
            </span>
        </div>
        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>
                Thrissur, Kerala
            </span>
        </div>
        <div className="info">
            <span> 
                <b>Works at </b>
            </span>
            <span>
            NoT yeT woRkiNg !! iM stiLl stUdYinG !!hehe, im still youth
            </span>
        </div>

        <button className="button info-button">Log Out</button>
    </div>
  )
}

export default InfoCard