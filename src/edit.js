import React from 'react';
import './index.css';

export const Edit = (props) => {
    const ageList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    return (
        <div id="edit">
            <h2>Edit</h2>
            <img src={props.thisDog.img} alt="profile" width="100px"></img>
            <form onSubmit={props.handleSubmit}>
                <label>
                    Name:
                    <input 
                    type="text" 
                    name="name" 
                    value={props.thisDog.name}
                    onChange={e => props.handleChange(e.target.value)}
                    />
                </label>
                <label>
                    Nickname:
                    <input 
                    type="text" 
                    name="nick" 
                    value={props.thisDog.nick}
                    onChange={props.handleChange}
                    />
                </label>
                <label>
                    Age:
                    <select 
                    name="age" 
                    value={props.thisDog.age}
                    onChange={props.handleChange}
                    >
                        {ageList.map((age) => {
                            return <option key={age} value={age}>{age}</option>
                            })
                        }                    
                    </select>
                </label>
                <label>
                    Bio:
                    <input 
                    type="text" 
                    name="bio" 
                    value={props.thisDog.bio}
                    onChange={props.handleChange}
                    />
                </label>
                <label>
                    Select new friends:
                    <select 
                    name="friends"
                    onChange={props.handleChange}
                    multiple={true}
                    >
                        {props.listOfDogs.map((dog, index) => {
                            return <option key={index} value={dog.nick}>{dog.nick}</option>
                            })
                        }
                    </select>
                </label>
            <button type="submit">
                Save
            </button>
            </form>
            

            <button className="go-to-start" onClick={props.renderStart}>
                Go to start page
            </button>
        </div>
    );
};