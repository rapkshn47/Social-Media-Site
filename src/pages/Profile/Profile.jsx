import React from 'react'
import './Profile.css'
import ProfileCard from "../../components/profileSide/ProfileCard/ProfileCard.jsx";
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import PostSide from '../../components/PostSide/PostSide.jsx';
import RightSide from '../../components/RightSide/RightSide';

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
          <ProfileCard/>
          <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile