import axios from "axios"
import { useState } from "react"
import { BsTrash } from "react-icons/bs"
import { FaPencilAlt } from "react-icons/fa"
import Manage from "../Portals/ManageInput"
const DataTable = ({ data, reRender}) => {
    // console.log(data)
    const [open, setOpen] = useState(false)
    
    const handledelete = async (id) => {
        await axios.delete(`http://localhost:6001/admin/Account/delete/${id}`)
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
                            <td className="AccountTableCells4">{data.email}</td>
                            <td className="AccountTableCells3">{data.accessrole}</td>
                            <td className="AccountTableCells2">{data.campus_name}</td>
                            <div className="AccountTableCell5">
                            <td className="editBTN" onClick={() => setOpen(true)}><FaPencilAlt /></td>
                            <Manage open={open} close={() => setOpen(false)} data={data} reRender={reRender}/>
                            <td onClick={() => { handledelete(data.user_id) }} ><BsTrash /></td>
                            </div>
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
// onClick={handleEdit(data.user_id)
