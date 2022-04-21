import React, { FC } from "react";
import { IUser } from "./types/types";
import UserItem from './UserItem';

interface userList {
  users: IUser[];
}

const UserList: FC<userList> = ({ users }) => {
  return (
    <div>
        {users.map(user => 
        <UserItem key={user.id} users={user}/>)}
    </div>
  );
};

export default UserList;
