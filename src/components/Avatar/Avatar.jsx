import React from "react";
import profilePlaceholder from "../../assets/img/profile-placeholder.png";

const Avatar = ({ avatar }) => (
  <div className="user__thumb" data-testid="avatar">
    {avatar.length > 0 ? (
      <img src={avatar} alt="" />
    ) : (
      <img src={profilePlaceholder} alt="" />
    )}
  </div>
);

export default Avatar;
