import "../../CssFiles/admin.css"
const CreateAccount = () => {
return (
    <div>
        <h2>CREATE ACCOUNT</h2>
        <input placeholder="Full Name"></input>
        <input placeholder="EMAIL"></input>
        <select>
            <option>San Antonio</option>
            <option>Austin</option>
            <option>Houston</option>
            <option>Dallas</option>
        </select>
        <select>
            <option>ADMIN</option>
            <option>TECH</option> 
            <option>USER</option>
        </select>
        <input placeholder="Initial Password"></input>
        <button>CREATE ACCOUNT</button>
    </div>
)
}

//give the option a value= "option 1"

export default CreateAccount