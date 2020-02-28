import React, {useState, useEffect} from 'react'
import axios from 'axios'
import history from '../utils/history'

const SignIn  = () => {
    const[user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitLogin = e => {
        axios.post('http://localhost:3300/api/auth/login', user)
            .then((result) => {
                console.log('login', result)
                localStorage.setItem('token', result.data.token)
                history.push('/jokes')
                window.location.reload(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const submitRegister = e => {
        axios.post('http://localhost:3300/api/auth/register', user)
            .then(res => {
                console.log('register' , res)
                submitLogin()
            })
    }

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <form onSubmit={ e => {
            e.preventDefault() 
        }}>
            <label>Username</label>
            <input
                name="username"
                value={user.username}
                onChange={e => handleChange(e)}
            ></input>
            <label>Password</label>
            <input
                name="password"
                value={user.password}
                onChange={e => handleChange(e)}
            ></input>
            <button 
                type="submit"
                onClick={ e => submitLogin(e)} 
            >Sign In</button>
            <button
                onClick={ e => submitRegister(e)}
            >Register</button>  
        </form>
    )
}

export default SignIn