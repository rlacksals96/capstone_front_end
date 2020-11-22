import React from 'react';
import BoardHead from '../components/bulletinBoard/BoardHead';
import BoardList from '../components/bulletinBoard/BoardList';
import Header from "../components/layout/Header";
function BulletinBoard(){
    return(
        <div>
            <Header/>
            {/* <BoardHead/> */}
            <BoardList/>

        </div>
    )
}
export default BulletinBoard;