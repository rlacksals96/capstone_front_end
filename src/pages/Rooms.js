import React from "react";
import Header from "../components/Header";
import {Link} from "react-router-dom";
const Rooms = ({ match }) => {
    // App.js /:kind로 설정해둔 값입니다.
    const { roomId } = match.params;
    return (
        <div>
            <Header/>
            <div>this is waiting room</div>
            <Link to="./rooms/1"><button>방입장</button></Link>
        {/*    대기방->방 으로 이동하는거 확인용 버튼..의미 없음*/}
        </div>
    //대기방
    );
};

export default Rooms;