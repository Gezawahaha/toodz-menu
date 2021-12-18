import Chart from "../../components/chart/Chart";
import FeaturedInfo1 from "../../components/featuredInfo1/FeaturedInfo1";
import "./home.css";
//import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

import { useEffect } from "react";
import axiox from "axios";
import { useMemo } from "react";

import { useState } from "react";
import ConfirmOrder from "../../components/confirmorder/ConfirmOrder";

export default function Home() {
  const monthsArray= useMemo(()=>[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"],[]);

    const [userStats, setUserStatas] = useState([]);

    useEffect(()=>{
      const getStats = async () =>{
        try {
          const res = await axiox.get("/users/stats", {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODM3ZDQyYTVjMmE0ODMzZDE0ZTM5OSIsInJvbGUiOnRydWUsImlhdCI6MTYzOTU1MTUwOSwiZXhwIjoxNjM5OTgzNTA5fQ.uArFYtu3A2rSsA3zAUV1xYm7F9ZK8mArCd-3GAgLfnM"
            }
          });
          const statList = res.data.sort(function (a, b){
            return a._id - b._id;
          });
          statList.map(item => setUserStatas(prev=>[
            ...prev,{
              name: monthsArray[item._id-1], 
              "New User": item.total}]
              ))
        } catch (err) {
          console.log(err)
        }
      }
      getStats();
    },[monthsArray]);

    //console.log(userStats);
  return (
    <div className="home">
      <FeaturedInfo1 />
      <div className="homeWidgets">
      <ConfirmOrder />
      </div>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        
        
        
      </div>
      
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      
    </div>
  );
}
