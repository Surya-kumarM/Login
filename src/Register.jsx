import './styles/register.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = ()=>{
    let [name, setName] = useState()
    let [email, setEmail] = useState()
    let [phone, setPhone] = useState()
    let [password, setPassword] = useState()

    let navigate = useNavigate()

    let nameData=(a)=>{
        setName(a.target.value)
    }

    let emailData =(b)=>{
        setEmail(b.target.value)
    }

    let phoneData = (c)=>{
        setPhone(c.target.value)
    }

    let passwordData = (d)=>{
        setPassword(d.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/users', {name, email,phone, password})
        .then(()=>{
            console.log('Registered the Data Successfully')
            navigate('/')
        })
        .catch(()=>{
            console.log('Some Errrrroror in Registering the DAta')
        })
    }


    return(
        <div id='register'>
            <h1>REGISTER</h1>
            <form >
                <label >NAME</label>
                <input type="text" value={name} onChange={nameData} required/>
                <label htmlFor="">EMAIL</label>
                <input type="text" value={email} onChange={emailData} required/>
                <label htmlFor="">PHONE NUMBER</label>
                <input type="number" value={phone} onChange={phoneData} required/>
                <label htmlFor="">PASSWORD</label>
                <input type="password" value={password} onChange={passwordData} required/>
                <button onClick={formHandle}>REGISTER</button>
                <p>Already User? <Link to='/'>Login</Link></p>
            </form>
        </div>
    )
}
export default Register