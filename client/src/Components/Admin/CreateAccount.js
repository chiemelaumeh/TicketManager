import { useState } from "react"
import axios from 'axios'
import "../../CssFiles/admin.css"

const CreateAccount = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        campus: 'San Antonio',
        role: 'ADMIN',
        password: ''
    })

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(values)
        const result = await axios.post('http://localhost:6001/account/register', values)
        console.log(result.data)
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    return (
        <form className="AdminCreateAccount" onSubmit={onSubmit}>
            <h2 id="CreateAccount">CREATE ACCOUNT</h2>
            <input type='text' placeholder="Full Name" className="inputBox" onChange={handleChange} value={values.name} name='name' />
            <input type='text' placeholder="EMAIL" className="inputBox" onChange={handleChange} value={values.email} name='email' />
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
            <button id="AdminCreateAccountBTN" type="submit">CREATE ACCOUNT</button>
        </form>
    )
}

//give the option a value= "option 1"

export default CreateAccount