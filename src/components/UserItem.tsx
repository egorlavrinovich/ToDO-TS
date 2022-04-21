import React, { FC }  from 'react';
import { IUser } from './types/types';


interface UserItem{
    users: IUser;
}

const UserItem:FC<UserItem> = ({users}) => {
    return (
        <div>{users.id} {users.name} lives in the city {users.adress.city} and street {users.adress.street}</div>
    );
};

export default UserItem;