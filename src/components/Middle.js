import React from 'react';
import {Paper} from '@mui/material';

function Middle() {
    return (
        <div>
            <div className="mid">
                <h3 style={{marginTop: '30px'}}>
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-virus-virus-transmission-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png" />
                    CoronaVirus Covid -10 Global Cases :
                </h3>

                <div style={{display: 'flex', flexDirection: 'row', width: '1000px', justifyContent: 'space-between',marginLeft:'35px'}}>
                    <Paper style={{padding: '47px', margin: '20px'}} className="side1">
                        <h3> Total Confirmed  </h3>
                        <h3 style={{textAlign: 'center'}} className="color-red">597072</h3>
                    </Paper>
                    <Paper style={{padding: '47px', margin: '20px'}} className="side1">
                        <h3> Total Deaths </h3>
                        <h3 style={{textAlign: 'center'}} className="color-voilet">27360</h3>
                    </Paper>
                    <Paper style={{padding: '47px', margin: '20px'}} className="side1">
                        <h3> Total recovered </h3>
                        <h3 style={{textAlign: 'center'}} className="color-green">313698</h3>
                    </Paper>
                </div>

                <div style={{backgroundColor: 'dodgerblue', width: '1200px', marginLeft: '-95px', height: '450px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>
                    <div>
                        <div style={{borderBottomRightRadius: '40px', borderTopRightRadius: '40px', backgroundColor: 'white', width: '750px', height: '450px'}}>
                            <h3 style={{marginLeft: '50px'}}>
                                Confirmed cases by Continents
                                <input className="searchinput" type="text" placeholder="Search" />
                                <h6 style={{color: 'blue', width: '90px', height: '20px'}}>21 june 2021</h6>
                            </h3>

                            <div className="world" >
                                <img style={{width: '650px', height: '350px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', marginLeft: '50px'}}
                                    src="https://assets.weforum.org/editor/_CAYYuCX-0Z3imS-tKhJbNOMf8PjxZFyKiCYi-F42n4.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Middle;
