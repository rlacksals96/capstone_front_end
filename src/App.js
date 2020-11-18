import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Main, NotFound,Rooms,Room,SignUp,Login,BulletinBoard,Selection } from "./pages";


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact={true} component={Main} />

                    <Route path="/auth/login" exact={true} component={Login} />
                    <Route path="/auth/signup" exact={true} component={SignUp} />
                    <Route path="/rooms" exact={true} component={Rooms}/>
                    <Route path="/rooms/:roomId" exact={true} component={Selection}/>
                    <Route path="/rooms/:roomId/room" exact={true} component={Room}/>
                    <Route path="/rooms/:roomId/board" exact={true} component={BulletinBoard}/>
                    <Route component={NotFound} />
                </Switch>

            </div>
        );
    }
}

export default App;