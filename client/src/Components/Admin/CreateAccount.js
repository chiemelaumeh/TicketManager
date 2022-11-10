import "../../CssFiles/admin.css"
const CreateAccount = () => {
return (
    <div className="AdminCreateAccount">
        <h2 id = "CreateAccount">CREATE ACCOUNT</h2>
        <input placeholder="Full Name" className="inputBox"></input>
        <input placeholder="EMAIL" className="inputBox"></input>
        <select className="inputBox">
            <option>San Antonio</option>
            <option>Austin</option>
            <option>Houston</option>
            <option>Dallas</option>
        </select>
        <select className="inputBox">
            <option>ADMIN</option>
            <option>TECH</option> 
            <option>USER</option>
        </select>
        <input placeholder="Initial Password" className="inputBox"></input>
        <button id="AdminCreateAccountBTN">CREATE ACCOUNT</button>
    </div>
)
}

//give the option a value= "option 1"

export default CreateAccount