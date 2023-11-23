import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './styles/dashboard.css'
import { useNavigate } from 'react-router-dom'



const Dashboard = () => {
    let [data, setData] = useState([])
    let navigate = useNavigate()

    let [loggedIn, setLoggedIn] = useState(true);


    let checkForInactivity = () => {

        let expireTime = localStorage.getItem('expireTime')

        if (expireTime < Date.now()) {
            // console.log('Logged Out')
            localStorage.setItem('Login', 'false')
            navigate('/')
        }
    }


    // 
    const updateExpireTime = () => {

        let expireTime = Date.now() + 20000

        localStorage.setItem('expireTime', expireTime)

    }

    useEffect(() => {

        const interval = setInterval(() => {
            checkForInactivity();
        }, 10000)

        return () => clearInterval(interval)

    }, [])

    useEffect(() => {

        updateExpireTime()


        window.addEventListener('click', updateExpireTime);
        window.addEventListener('keypress', updateExpireTime);
        window.addEventListener('scroll', updateExpireTime);
        window.addEventListener('mousemove', updateExpireTime);

        return () => {
            window.removeEventListener('click', updateExpireTime);
            window.removeEventListener('keypress', updateExpireTime);
            window.removeEventListener('scroll', updateExpireTime);
            window.removeEventListener('mousemove', updateExpireTime);

        }

    }, [])


    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then((res) => {
                setData(res.data)
                console.log('Got the DashBoard Data Successfully')
            })
            .catch(() => {
                console.log('Some Error in Getting Data in Dash Board')
            })
    }, [])

    let getOut = () => {
        alert('Logged Out')
        navigate('/')
        localStorage.setItem('Login', 'false')
    }

    return (
        <div id='dashboard'>
            <nav><h1>DASHBOARD</h1>
                <button onClick={getOut}>LOGOUT</button>
            </nav>

            <section>
                {data.map((x) => {
                    return (
                        <div>
                            <p>NAME</p>
                            <h3>{x.name}</h3>
                            <p>PHONE</p>
                            <h3>{x.phone}</h3>
                            <p>EMAIL</p>
                            <h3>{x.email}</h3>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}
export default Dashboard