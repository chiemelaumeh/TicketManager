import fakeData from "../../Pages/dataMA"
import DataTable from "../../Components 2/DataTable"

const ManageAccounts = () => {
   
return (

    <div>
        <h2>Manage Accounts</h2>

        {fakeData.map((data) => (
            <DataTable data={data}/>
           
        ))}
    </div>
)
}

export default ManageAccounts