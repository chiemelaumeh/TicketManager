
import DataTable from "../../Components 2/DataTable"
import "../../CssFiles/manageacc.css"
import { useEffect, useState } from "react"
import axios from "axios"


const ManageAccounts = () => {

//    const {fakeData} = useContext()
const [account, setAccount] = useState([])
const [render, setRender] = useState(false)
   useEffect(() => {
const getDatatFromDB = async() => {
const {data} = await axios.get("http://localhost:6001/admin/Accounts");
setAccount(data)
console.log(data)
}
getDatatFromDB()
   }, [render])

const reRender = () => {
    setRender(!render)
}




return (

    <div className="ManageDiv">
        <h1 className="ManageAccountH2">Manage Accounts</h1>

                     <div className="AccountLables">
                        <h2 className="Lables">User Name</h2>
                        <h2 className="Lables">Email</h2>
                        <h2 className="Lables">Role</h2>
                        <h2 className="Lables">Campus</h2>
                        <h2 className="Lables">Edit</h2>
                    </div>
     
        {account.map((data) => (
            <DataTable key={data.user_id} data={data} reRender={reRender}/>
           
        ))} 
    </div>
)

}

export default ManageAccounts
// user_id SERIAL PRIMARY KEY NOT NULL,
//     userName TEXT,
//     accessRole TEXT,
//     campus_name TEXT,