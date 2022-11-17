import { useContext, useState } from "react";
import LoginContext from "../../Contexts/loginContext";
import { useFormik } from "formik"
import { dataSchema } from "./schemaValid"
import "../../CssFiles/login.css"
import axios from 'axios';

const LoginForm = () => {
    const { setUser, user } = useContext(LoginContext)
    const [err, setErr] = useState({})

    const onSubmit = async (values, actions) => {
        try {
            const { data } = await axios.post('https://taskappapi.onrender.com/account/login', values)

            if (data.accessToken === undefined) return alert('Not Authorized');
            setUser(data)
            sessionStorage.setItem('testToken', data.accessToken)
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
            <form onSubmit={handleSubmit}>
                <div className="loginEmail">
                    <label className="label-text">Email</label>
                    <input type='email'
                        id="input-login"
                        name="email"
                        placeholder="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? "input-error" : ""}
                    />
                    {errors.email && touched.email && <p className="error-p">{errors.email}</p>}
                </div>

                <div className="loginPassword">
                    <label className="label-text">Password</label>
                    <input type='password'
                        id="input-login"
                        name="password"
                        placeholder="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password ? "input-error" : ""}
                    />
                    {((errors.password && touched.password) || err.msg) && <p className="error-p" >{errors.password || err.msg}</p>}

                </div>

                <button className="loginbtn" type="submit">Log in</button>
            </form>

        </div>
    )

}

export default LoginForm