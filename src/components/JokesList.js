import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

const JokesList = props => {
    const [jokes, setjokes] = useState([])
    useEffect(() => {
        axiosWithAuth().get('/api/jokes')
            .then(res => {
                setjokes(res.data)
            },[])
    })
    return(
        <>
        {
            jokes.map(joke => <h1>{joke.joke}</h1>)
        }
        </>
    )
}

export default JokesList