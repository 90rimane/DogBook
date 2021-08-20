import React from 'react';
import './index.css';

export const Start = (props) => {
    return (
        <div id="start" key="start">
            <h2>User Directory</h2>
            {props.listOfDogs.map((dog, index) => {
                return (
                    <div key={index}>
                        <button onClick={() => props.renderProfile(dog)} 
                            style={{color: dog.present ? 'green' : 'red' }}>
                            @{dog.nick}
                        </button>
                        <button className="x-button" onClick={() => props.handleDeleteDog(dog.name)}>X</button>
                    </div>
                )})
            }
            <button className="go-to-start"  onClick={props.renderCreate} page={'Create'}>
                Create new dog
            </button>
        </div>
    );
};