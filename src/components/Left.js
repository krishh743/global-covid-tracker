import "../App.css";
import React, {useState, useEffect} from 'react';
import {MdCoronavirus} from "react-icons/md";
import {MdDashboard} from "react-icons/md";
import {MdLocalHospital} from "react-icons/md";
import {ImMap2} from "react-icons/im";
import {Link} from 'react-router-dom';
// import {Button} from "@mui/material";

const Left = () => {
    const [active, setActive] = useState(true)

    useEffect(() => {
        console.log("active", active)
    }, [active])
    return (
        <div className="left-bar">
            <div>
                <div className="map-div">
                    <Link to="/Continent"><button onClick={() => setActive(true)} style={{backgroundColor: active ? 'white' : "transparent"}} className="btn-btn-light">Continent</button> </Link>
                    <Link to="/Countries"><button onClick={() => setActive(false)} style={{backgroundColor: !active ? 'white' : "transparent"}} className="btn-btn-light">{active}Countries</button></Link>
                </div>
            </div>
            <div className="virus">
                <MdCoronavirus size={60} />
            </div>
            <div className="map-hover"> <ImMap2 size={60} />
                <br />
                Map
            </div>
            <div className="dashboard">
                <MdDashboard size={60} />
                <br />Dashboard
            </div>
            <div className="fourth-icon">
                <MdLocalHospital size={60} />
                <br /> Hospital
            </div>
        </div>
    );
};
export default Left;
