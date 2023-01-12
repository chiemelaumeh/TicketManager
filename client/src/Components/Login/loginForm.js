import { useContext, useState } from "react";
import LoginContext from "../../Contexts/loginContext";
import { useFormik } from "formik"
import { dataSchema } from "./schemaValid"
import "../../CssFiles/login.css"
import axios from 'axios';
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { VscSignIn } from 'react-icons/vsc'



const LoginForm = () => {
    const { setUser, user } = useContext(LoginContext)
    const [err, setErr] = useState({})

    const onSubmit = async (values, actions) => {
        try {

            const { data } = await axios.post('https://ticket-manager-api.onrender.com/account/login', values)


            if (data.accessToken === undefined) return alert('Not Authorized');
            // console.log(data)
            setUser(data)
            sessionStorage.setItem('testToken', data.accessToken)
            window.localStorage.setItem('isLoggedIn', true)
            actions.resetForm()
        } catch (error) {
            if (error.response.data.msg) return setErr(error.response.data)
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
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="loginEmail">
                    <label className="label-text"><MdEmail /> Email</label>
                    <input type='email'
                        id="input-login"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? "input-error" : ""}
                    />
                    {errors.email && touched.email && <p className="error-p">{errors.email}</p>}
                </div>

                <div className="loginPassword">
                    <label className="label-text"><RiLockPasswordFill /> Password</label>
                    <input type='password'
                        id="input-login"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password ? "input-error" : ""}
                    />
                    {((errors.password && touched.password) || err.msg) && <p className="error-p" >{errors.password || err.msg}</p>}

                </div>

                <button className="loginbtn" type="submit"><VscSignIn /> Sign In</button>
            </form>

        </div>
    )

}

export default LoginForm