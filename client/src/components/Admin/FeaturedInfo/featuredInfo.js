import React from 'react'
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function featuredInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Total Users</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">20</span>
                    <span className="featuredMoneyRate">
                        +6 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Total Posts</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">113</span>
                    <span className="featuredMoneyRate">
                        +60 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Total Reacts</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">1261</span>
                    <span className="featuredMoneyRate">
                        +315 <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default featuredInfo
