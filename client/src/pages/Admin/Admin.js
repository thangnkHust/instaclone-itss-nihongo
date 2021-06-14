import React from 'react'
import Topbar from '../../components/Admin/Topbar/Topbar'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import Home from './Home/Home'
import UserList from "./User/UserList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Admin.css"
function Admin() {
    return (
        <div>
            <Router>
                <Topbar />
                <div className="container">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/admin">
                            <Home />
                        </Route>
                        <Route path="/admin/users">
                            <UserList />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Admin