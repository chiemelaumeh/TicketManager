import {useContext} from "react";
import LoginContext from "../../Contexts/loginContext";
import { useFormik } from "formik"
import { dataSchema } from "./schemaValid"
import "../../CssFiles/login.css"
import axios from 'axios';

const LoginForm = () => {
    const {setUserRole} = useContext(LoginContext)
   
    const onSubmit = async (values, actions) => {
        // console.log(values)
        try {
            const { data } = await axios.post('http://localhost:6001/account/login', values)
            if (data.accessToken === undefined) return alert('Not Authorized');
            setUserRole(data.role)
            sessionStorage.setItem('testToken', data.accessToken)
            actions.resetForm()
        } catch (error) {
            console.log(error.response.data)
        }
    }
   

    const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: dataSchema,
        onSubmit
    })

    //console.log(errors)


    return (
        <div className="login">
            <div className="loginEmail">
                <form onSubmit={handleSubmit}>
                    <label >Email</label>
                    <input type='email'
                        name="email"
                        placeholder="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? "input-error" : ""}
                    />
                    {errors.email && touched.email && <p>{errors.email}</p>}
                    <div className="loginPassword">
                        <label>Password</label>
                        <input type='password'
                            name="password"
                            placeholder="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password ? "input-error" : ""}
                        />
                        {errors.password && touched.password && <p>{errors.password}</p>}
                        <button className="loginbtn" type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default LoginForm