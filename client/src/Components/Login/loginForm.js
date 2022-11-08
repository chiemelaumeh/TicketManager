import { useState } from "react"
import { useFormik } from "formik"
import { dataSchema } from "./schemaValid"
import "../../CssFiles/login.css"

const LoginForm = () => {

    // const [input, setInput] = useState({ email: '', password: '' })

    // const { email, password } = input

    // const handleChange = (e) => {
    //     setInput({ ...input, [e.target.name]: e.target.value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(input)
    // }
    const onSubmit = (values, actions) => {
        console.log(values)
        actions.resetForm()
    }

    const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: dataSchema,
        onSubmit
    })

    console.log(errors)


    return (
        <div>
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
                <button type="submit">Log in</button>
            </form>
        </div>
    )

}

export default LoginForm