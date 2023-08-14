import React from "react";
import "./ProfileCard.css";
import Cover from "../../../img/cover.jpg";
import Profile from "../../../img/profileImgAkku.jpg";

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Akshaya K U</span>
        <span>Student at CUK</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followers</span>
          </div>

          <div className="vl"></div>
          <div className="follow">
            <span>200</span>
            <span>Following</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>Profile</span>}
    </div>
  );
};

export default ProfileCard;
