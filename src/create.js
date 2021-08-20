import React, { useState, useEffect } from 'react';
import './index.css';

export const Create = (props) => {
    const ageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    const [img, setImg] = useState('')
    useEffect(() => {
        const fetchProfilePic = async () => {
            const resp = await fetch('https://dog.ceo/api/breeds/image/random')
            if (resp.ok) {
                const data = await resp.json()
                setImg(data.message)
            } else {
                throw new Error('Request failed')
            }
        };
        fetchProfilePic()
    }, [])

    return (
        <div id="create">
            <h2>Ceate new dog profile</h2>
            <img src={img} alt="profile" width="100px"></img>
            <form onSubmit={e => props.handleSubmit(e, img)}>
                <label>
                    <input placeholder="Enter Name"
                    type="text" 
                    name="name"
                    value={props.newDog.name}
                    onChange={props.handleChange}
                    />
                </label>
                <label>
                    <input placeholder="Enter Nickname"
                    type="text" 
                    name="nick"
                    value={props.newDog.nick}
                    onChange={props.handleChange}
                    />
                </label>
                
                <label>
                   
                    <input placeholder="Write a Bio here"
                    type="text" 
                    name="bio" 
                    value={props.newDog.bio}
                    onChange={props.handleChange}
                    />
                </label>
                <label>
                    Age:
                    <select 
                    name="age"
                    value={props.newDog.age}
                    onChange={props.handleChange}
                    >
                        {ageList.map((age) => {
                            return <option key={age}>{age}</option>
                            })
                        }                    
                    </select>
                </label>
                <label>
                    Select a friend:
                    <br/>
                    <select 
                    name="friends"
                    onChange={props.handleCreateFriendsList}
                    multiple={true}
                    >
                        {props.listOfDogs.map((dog, index) => {
                            return <option className="friend-option" key={index} value={dog.nick}>{dog.nick}</option>
                            })
                        }
                    </select>
                </label>
            <button type="submit">
                Save
            </button>
            </form>

            <button className="go-to-start"  onClick={props.renderStart}>
                Go to start page
            </button>
        </div>
    );
};
