import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Room } from './index'
import Header from  '../components/layout/Header';
const Selection =()=>{
  return(
    <div>
      <Header/>
      <Link to="/rooms/:roomId/room"><button>Study</button></Link>
      <Link to="/rooms/:roomId/board"><button>Bulletin-board</button></Link>
    </div>
  )
}
// <Route path="/rooms/:roomId" exact={true} component={Room}/>
export default Selection;