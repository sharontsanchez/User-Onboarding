import React from "react";

import "./UserCard.css";

const UserCard = (props) => {
  const { userInfo } = props;

  return (
    <div className="card">
      <div className="card-picture">
        <img src={userInfo.avatar} />
      </div>
      <div className="card-info">
        <h3>
          {userInfo.first_name} {userInfo.last_name}
        </h3>
        <p>Email: {userInfo.email}</p>
      </div>
    </div>
  );
};

export default UserCard;