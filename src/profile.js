import React from 'react';
import './index.css';

export const Profile = (props) => {
    return ( 
        <div>
            <h2>My dogs profile</h2>
            <img src={props.thisDog.img} alt="profile" width="100px"></img>
            <button onClick={props.renderEdit}>
                Edit
            </button>
            <label>
                Present in garden: 
                <input type="checkbox" name="present" onChange={props.handlePresence} defaultChecked={props.thisDog.present}/>
            </label>
            <div>
                <div id="profile">Name: {props.thisDog.name}</div>
                <div id="profile">Nickname: @{props.thisDog.nick}</div>
                <div id="profile">Age: {props.thisDog.age}</div>
                <div id="profile">Bio: {props.thisDog.bio}</div>
            </div>
            <div id="profile">
                Friends: 
                {props.thisDog.friends.map((dog, index) => {
                    return (
                    <div key={index}>
                        <button>@{dog}</button>
                    </div>
                    )})
                }
            </div>
            <button className="go-to-start" onClick={props.renderStart}>Go to start page</button>
        </div>
    );
};