import React, { useState, useEffect } from 'react';
import { Dog } from './DogClass'
import { Start } from './start.js';
import { Create } from './create.js';
import { Profile } from './profile.js';
import { Edit } from './edit.js';

export const App = () => {
    const [page, setPage] = useState('Start');
    const [thisDog, setThisDog] = useState({});
    const renderProfile = (dog) => {
        setThisDog(dog)
        setPage('Profile')
    }
      
   const [newDog, setNewDog] = useState({name:'', nick:'', age:0, bio:'', friends:[], img:''});
   const [dogs, setDogs] = useState([]);
   const handleCreateChange = ({ target }) => {
       setNewDog((prev) => ({
        ...prev, [target.name]: target.value
        }))
    }
    const handleCreateFriendsList = ({ target }) => {
        const { friends } = newDog
        const newFriends = [...friends, target.value]     
        setNewDog((prev) => ({
            ...prev, friends: newFriends
        }))
    }
    const handleCreate = (e, img) => {
        e.preventDefault()

        const createdDog = new Dog(newDog)
        createdDog.img = img
        setDogs((prev) => [...prev, createdDog])
        setPage('Start')
        setNewDog({name:'', nick:'', age:0, bio:'', friends:[], img:''})
    }
    const handleEditChange = ({ target }) => {
        setThisDog((prev) => ({
        ...prev, [target.name]: target.value
        }))
    }
    const handleEditFriendsList = ({ target }) => {
        const { friends } = thisDog

        const newFriends = [...friends, target.value]
        setThisDog((prev) => ({
            ...prev, friends: newFriends
        }))
    }
    const handleDeleteFriend = (name) => {
        setThisDog(() => thisDog.friends.filter(
            (dog) => dog.name !== name
        ));

    }
    const handleEdit = (e) => {
        e.preventDefault()

        const thisDogIndex = dogs.findIndex((dog) => {
            return thisDog === dog
        })
        const newDogs = [...dogs]
        newDogs[thisDogIndex] = thisDog
        setDogs(newDogs)
        setPage('Start')
        setThisDog({})
    }
    const handlePresence = (e) => {
        e.preventDefault()
        const thisDogIndex = dogs.findIndex((dog) => {
            return thisDog === dog
        })
        setDogs((prev) => {
            const newDogs = [...prev]
            newDogs[thisDogIndex].present = !newDogs[thisDogIndex].present
            return newDogs
        })
    }
    const handleDeleteDog = (name) => {

        setDogs((prev) => prev.filter(
            (dog) => dog.name !== name
        ));
    }

    useEffect(() => {
        const dogs = JSON.parse(localStorage.getItem("dogs") || "[]")
        setDogs(dogs)
    }, [])
    useEffect(() => {
        window.localStorage.setItem("dogs", JSON.stringify(dogs))
    }, [dogs])

    switch(page) {
        case 'Start':
            return <Start 
                    renderCreate={() => setPage('Create')} 
                    renderProfile={renderProfile}
                    handleDeleteDog={handleDeleteDog}
                    listOfDogs={dogs}
                    />
        case 'Create':
            return <Create 
                    renderStart={() => setPage('Start')}
                    handleChange={handleCreateChange}
                    handleCreateFriendsList={handleCreateFriendsList}
                    handleSubmit={handleCreate}
                    newDog={newDog}
                    listOfDogs={dogs}
                    />
        case 'Profile':
            return <Profile 
                    renderStart={() => setPage('Start')}
                    renderProfile={renderProfile}
                    renderEdit={() => setPage('Edit')}
                    handlePresence={handlePresence}
                    listOfDogs={dogs}
                    thisDog={thisDog}
                    />
        case 'Edit':
            return <Edit 
                    renderStart={() => setPage('Start')}
                    handleChange={handleEditChange}
                    handleEditFriendsList={handleEditFriendsList}
                    handleDeleteFriend={handleDeleteFriend}
                    handleSubmit={handleEdit}
                    listOfDogs={dogs}
                    thisDog={thisDog}
                    />
        default:
            return <h1>Something went wrong!</h1>;
    }
};