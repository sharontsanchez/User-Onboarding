import React from "react";
import UserCard from "../UserCard/UserCard";

import "./UserList.css";

const UserList = (props) => {
  const { userList } = props;
  return (
    <section>
      {userList.map((user) => {
        return <UserCard key={user.id} userInfo={user} />;
      })}
    </section>
  );
};

export default UserList;