import DataTable from "../../Components 2/DataTable"
import "../../CssFiles/manageacc.css"
import { useEffect, useState } from "react"
import axios from "axios"


const ManageAccounts = () => {

    //    const {fakeData} = useContext()
    const [account, setAccount] = useState([])
    const [render, setRender] = useState(false)
   
    
    useEffect(() => {
        const getDatatFromDB = async () => {
            const { data } = await axios.get("http://localhost:6001/admin/Accounts");
            setAccount(data)
            console.log(data)
        }
        getDatatFromDB()
    }, [render])


    const reRender = () => {
        setRender(!render)
    }
   

    return (

        <>


            <div className="ManageDiv">
                <h1 className="ManageAccountH2">Manage Accounts</h1>

                <div className="AccountLables">
                    <div className="Lables">User Name</div>
                    <div className="Lables">Email</div>
                    <div className="Lables">Role</div>
                    <div className="Lables">Campus</div>
                    <div className="edit-Lables">Edit</div>
                </div>

               <div className="AccountsContainer">
                {account.map((data) => (
                    <DataTable key={data.user_id}
                        data={data} reRender={reRender}
                        
                
                    />

                ))}
                </div> 
            </div>


        </>
    )


}

export default ManageAccounts
// user_id SERIAL PRIMARY KEY NOT NULL,
//     userName TEXT,
//     accessRole TEXT,
//     campus_name TEXT,
