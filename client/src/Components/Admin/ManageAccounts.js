import fakeData from "../../Pages/dataMA"
import DataTable from "../../Components 2/DataTable"
import { useContext } from "react"
import "../../CssFiles/manageacc.css"


const ManageAccounts = () => {
    //    const {fakeData} = useContext()
    return (

        <div>
            <h2>Manage Accounts</h2>
            <div className="Header">
                <div>FullName</div>
                <div>Email</div>
                <div>Campus</div>
            </div>
            {fakeData.map((data) => (
                <DataTable key={data.full_name} data={data} />

            ))}
        </div>
    )
}

export default ManageAccounts