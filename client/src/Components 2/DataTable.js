
import axios from "axios"
import { BsTrash } from "react-icons/bs"
import { FaPencilAlt } from "react-icons/fa"
import Manage from "../Portals/ManageInput"



const DataTable = ({ data, reRender }) => {
    // console.log(data)
// const handleEdit = () => {
// return (
//     <>
//     <Manage />
//     </>
// )
// }

    const  handledelete = async (id) => {
        await axios.delete(`https://taskappapi.onrender.com/admin/Account/delete/${id}`)
        reRender()
        // console.log(id)
// console.log(data.user_id)
    }
    return (
        <>
            
                <div id={data.user_id} className="Data_Table">


                <table className="AccountTable">
                        <thead>
                        <tr>
                            <th className="UserNameData" scope="col"></th>
                            <th className="EmailData" scope="col"></th>
                            <th className="RoleData" scope="col"></th>
                            <th className="CampusData" scope="col"></th>
                            <th className="EditAndDelete" scope="col"></th>
                            <th className="EditAndDelete" scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="AccountTableCells">{data.username}</td>
                            <td className="AccountTableCells">{data.email}</td>
                            <td className="AccountTableCells">{data.accessrole}</td>
                            <td className="AccountTableCells">{data.campus_name}</td>
                            <td ><FaPencilAlt /></td>
                            <td onClick={() => {handledelete(data.user_id)}} ><BsTrash /></td>
                        </tr>
                        <tr>

                        </tr>
                        </tbody>
                    </table>
                    </div>

                    
                


        </>
    )
}


export default DataTable
// /admin/Accounts
