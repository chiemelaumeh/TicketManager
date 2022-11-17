import { useState } from "react"
import axios from 'axios'
import "../../CssFiles/admin.css"

const CreateAccount = () => {
    const [err, setErr] = useState({
        name: '',
        password: '',
        email: '',
    })
    const [values, setValues] = useState({
        name: '',
        email: '',
        campus: 'San Antonio',
        role: 'ADMIN',
        password: ''
    })

    const onSubmit = async (e) => {
        e.preventDefault()
        const result = await axios.post('https://taskappapi.onrender.com/account/register', values)
        console.log(result)
        if (result.data.error) {
            setErr(result.data.error)
        } else {
            setErr({})
            setValues({ ...values, name: '', email: '', password: '' })
        }

    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    return (
        <form className="AdminCreateAccount" onSubmit={onSubmit}>
            <h2 id="CreateAccount">CREATE ACCOUNT</h2>
            <input type='text' placeholder="Full Name" className="inputBox" onChange={handleChange} value={values.name} name='name' />
            {err.name && <p className="error-reg">{err.name}</p>}
            <input type='text' placeholder="EMAIL" className="inputBox" onChange={handleChange} value={values.email} name='email' />
            {err.email && <p className="error-reg">{err.email}</p>}
            <select className="inputBox" onChange={handleChange} value={values.campus} name='campus' >
                <option value='San Antonio'>San Antonio</option>
                <option value='Austin'>Austin</option>
                <option value='Houston'>Houston</option>
                <option value='Dallas'>Dallas</option>
            </select>
            <select className="inputBox" onChange={handleChange} value={values.role} name='role' >
                <option value='ADMIN'>ADMIN</option>
                <option value='TECH'>TECH</option>
                <option value='USER'>USER</option>
            </select>
            <input type='password' placeholder="Initial Password" className="inputBox" onChange={handleChange} value={values.password} name='password' />
            {err.password && <p className="error-reg">{err.password}</p>}
            <button id="AdminCreateAccountBTN" type="submit">CREATE ACCOUNT</button>
        </form>
    )
}

//give the option a value= "option 1"

export default CreateAccount