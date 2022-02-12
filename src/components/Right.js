import React from 'react';
import '../App.css';



function Right() {
    return (
        <div className='right-div'>
            <div className="location">
                <button className="cylinderbtn">My Location</button>
                <button className="cylinderbtn">Donate</button>
            </div>
            <div className="symptoms">
                <img
                    className="simg"
                    src="https://media.istockphoto.com/vectors/covid19-coronavirus-infographic-vector-id1212677375?k=20&m=1212677375&s=612x612&w=0&h=XPOyPqu4pSbz836tcDq4S0krJVC7_jABpGB0xvdGxMk="
                />
            </div>
            <div>
                <h5>
                    Confirmed(cumulative):
                </h5>
                <img className="first-graph" src="http://cdn.statcdn.com/Infographic/images/normal/20634.jpeg" />
                <h5>Daily cases confirmed:</h5>
                <img className="bar" src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs41996-020-00070-1/MediaObjects/41996_2020_70_Fig1_HTML.png" />
            </div>
        </div>
    )
}
export default Right;
