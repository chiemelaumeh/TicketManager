import LoginForm from "../Components/Login/loginForm"


const Login = ({ setLoginState }) => {

    return (
        <>

            <h1 className="login">ATHENA</h1>
            
            <LoginForm setLoginState={setLoginState} />

        </>
    )
}

export default Login