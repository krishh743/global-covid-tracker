import React, {useEffect, useState} from 'react';
import Left from '../components/Left';
import Right from '../components/Right';
import "../App.css";
import {Paper} from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import countryAction from '../Actions/countryActions'



const Countries = () => {
    const response = useSelector((state) => state.countryData.countryData)
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState('')
    useEffect(async () => {
         dispatch(countryAction())
        // setTimeout(() => {
        //     console.log('data from redux : ', response);
        // },)
    }, [dispatch])
    return (
        <>
            <Left />
            <Right />

            <div className="mid">
                <h3 style={{marginTop: '30px'}}>
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-virus-virus-transmission-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png" />
                    CoronaVirus Covid -10 Global Cases
                </h3>

                <div style={{display: 'flex', flexDirection: 'row', width: '1000px', justifyContent: 'space-between',marginLeft:'35px'}}>
                    <Paper style={{padding: '47px', margin: '20px'}} >
                        <h3> Total Confirmed </h3>
                        <h3 style={{textAlign: 'center'}} className="color-red">68,000 </h3>
                    </Paper>
                    <Paper style={{padding: '47px', margin: '20px'}}>
                        <h3> Total Deaths </h3>
                        <h3 style={{textAlign: 'center'}} className="color-voilet">4,900</h3>
                    </Paper>
                    <Paper style={{padding: '47px', margin: '20px'}}>
                        <h3> Total recovered </h3>
                        <h3 style={{textAlign: 'center'}} className="color-green">55,676</h3>
                    </Paper>
                </div>

                <div style={{backgroundColor: 'dodgerblue', width: '1200px', marginLeft: '-95px', height: '450px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>
                    <div>
                        <div style={{borderBottomRightRadius: '40px', borderTopRightRadius: '40px', backgroundColor: 'white', width: '750px', height: '450px'}}>
                            <h3 style={{marginLeft: '50px'}}>
                                Confirmed cases by Countries :
                                <input className="searchinput" value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" placeholder="Search" />
                                <h6 style={{color: 'blue', width: '90px', height: '20px'}}>21 june 2021</h6>
                            </h3>
                            <p className="all-info" style={{marginLeft: '820px', width: '300px'}}>
                                {response.length && response.map((item) => (
                                    <div>
                                        {item.country !== undefined && item.country.toLowerCase().match(keyword) &&  (
                                            <Paper style={{backgroundColor: 'dodgerblue', color: 'white'}}>
                                                <h3> {item.country}</h3>

                                                Total Active Cases : {item.active}<br />
                                                Total Deaths : {item.deaths}<br />
                                                Total Recover : {item.recovered}<br />
                                            </Paper>
                                        )}
                                    </div>
                                ))}
                            </p>
                            <div className="world" >
                                <img style={{width: '650px', height: '350px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', marginLeft: '50px'}}
                                    src="https://assets.weforum.org/editor/_CAYYuCX-0Z3imS-tKhJbNOMf8PjxZFyKiCYi-F42n4.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Countries;
