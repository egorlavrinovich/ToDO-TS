import React from 'react';
import Card from './components/Card';
import { CardVarinat } from './components/Card';
import { IUser } from './components/types/types';
import UserList from './components/UserList';

function App(): JSX.Element {
  const user:IUser[] = [
    {id:1, name:'Egor', adress:{city:'Brest',street:'Moskovskaya'}},
    {id:2, name:'Vasya', adress:{city:'Brest',street:'Moskovskaya'}}
  ]

  return (
    <div>
      <Card width='100px' height='200px' variant={CardVarinat.outlinde} onClick={(num)=>console.log('ccc',num)} ><button>Click!</button></Card>
      <UserList users={user}/>
    </div>
  );
}

export default App;