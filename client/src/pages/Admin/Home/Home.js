import React from 'react'
import Chart from '../../../components/Admin/Chart/chart';
import FeaturedInfo from '../../../components/Admin/FeaturedInfo/featuredInfo';
import "./Home.css";
import { userData } from "../../../components/Admin/Chart/dummyData"
import WidgetSm from '../../../components/Admin/WidgetSm/WidgetSm';
import WidgetLg from '../../../components/Admin/WidgetLg/WidgetLg';
function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
