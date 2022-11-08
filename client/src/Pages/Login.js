import LoginForm from "../Components/Login/loginForm"


const Login = ({ setLoginState }) => {

    return (
        <>
            <LoginForm setLoginState={setLoginState} />
        </>
    )
}

export default Login