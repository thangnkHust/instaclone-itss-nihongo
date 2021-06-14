import React from 'react'
import "./Topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft" >
                    <span className="logo">Admin-Team6</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-anh-avatar-de-thuong.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;
