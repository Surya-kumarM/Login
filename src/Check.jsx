import {Navigate} from 'react-router-dom'
import Dashboard from './Dashboard'

const Check = ()=>{
    let data
    if(localStorage.getItem('Login') === 'true'){
        data = true
    }
    else{
        data = false
    }
    return(
        data? <Dashboard/>: <Navigate to='/' />
    )
}
export default Check