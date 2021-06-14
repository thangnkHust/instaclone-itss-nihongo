import React from 'react'
import "./Sidebar.css";
import {
    LineStyle,
    PermIdentity,
    
} from "@material-ui/icons";
import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/admin" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <Link to="/admin/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
