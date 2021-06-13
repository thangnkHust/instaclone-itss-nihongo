import React from 'react'
import Topbar from '../../components/Admin/Topbar/Topbar'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import Home from './Home/Home'
import "./Admin.css"
function Admin() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Home />
            </div>
        </div>
    )
}

export default Admin
