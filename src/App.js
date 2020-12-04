import React, { Component } from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import {
	Main,
	NotFound,
	Rooms,
	Room,
	SignUp,
	Login,
	BulletinBoard,
	Selection,
	BoardCreate,
	BoardRead

} from "./pages";
import MkRoom from './components/waitingRoom/MkRoom'
import GetPassword from './components/waitingRoom/GetPassword';
//import VideoCall from "./components/VideoCall";
class App extends Component {
	render() {
		return (

			<div>
				<Switch>
					<Route path="/" exact={true} component={Main} />

					<Route path="/auth/login" exact={true} component={Login} />
					<Route path="/auth/signup" exact={true} component={SignUp} />
					<Route path="/rooms" exact={true} component={Rooms} />
					{/*<Route path="/rooms/:roomId" exact={true} component={Selection} />*/}
					<Route path="/rooms/:roomId/room" exact={true} component={Room} />
					<Route
						path="/rooms/board"
						exact={true}
						component={BulletinBoard}
					/>
					<Route 
						path="/rooms/board/:id"
						exact={true}
						component={BoardRead}
					/>
					<Route
						path="/rooms/boardcreate"
						exact={true}
						component={BoardCreate}
					/>
					<Route
						path="/rooms/mkroom"
						exact={true}
						component={MkRoom}
					/>
					<Route
						path="/rooms/getPassword"
						exact={true}
						component={GetPassword}
					/>



					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default App;
