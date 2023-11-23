import './styles/login.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = ()=>{
    let [email, setEmail] = useState()
    let [password, setPassword] = useState()
    let [data, setData] = useState([])

    let navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then((res)=>{
            setData(res.data)
            console.log('Fetched the Data Successfully')

        })
        .catch(()=>{
            console.log('some Error in Fetching Data')
        })
    },[])

    let emailData = (a)=>{
        setEmail(a.target.value)
    }

    let passwordData = (b)=>{
        setPassword(b.target.value)
    }

    let formHandle = (e)=>{
        e.preventDefault()
        console.log(email, password)
        let users = data.find((x)=>{
            return x.email === email
        })
        if(users){
            if (users.password === password){
                alert('User Loged In Successfully')
                localStorage.setItem('Login', 'true')
                navigate('/dashboard')
            }
            else{
                alert('Wrong Password!! ')
            }
        }
        else{
            alert('User Not Found!')
        }
        console.log(users)
        
    }

    return(
        <div id='login'>
            <h1>LOGIN </h1>
            <form action="">
                <label htmlFor="">EMAIL</label>
                <input type="text" value={email} onChange={emailData} />
                <label htmlFor="">PASSWORD</label>
                <input type="password" value={password} onChange={passwordData} />
                <button onClick={formHandle}>LOGIN</button>
                <p>New User? <Link to='/register' >Register</Link></p>
            </form>
        </div>
    )
}
export default Login