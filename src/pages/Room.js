import React from 'react';
import Header from "../components/Header";
import {Link} from 'react-router-dom';
function Room(){
    return(
        <div>
            <Header/>
            <div>this is room</div>
            <Link to="./room/study"><button>공부방 입장</button></Link>
            <Link to="./room/bulletinBoard"><button>게시판</button></Link>
        {/*    room에서 다음 페이지 버튼에 맞게 경로 맞춰서 들어가지게 해야 하는데 아직
        공부가 덜되서 당장은 어떤 버튼을 눌러도 bulletinboard 페잊로 가도록 설정*/}
        </div>

    )
}
export default Room;