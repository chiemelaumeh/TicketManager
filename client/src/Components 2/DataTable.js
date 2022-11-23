import axios from "axios"
import { useState } from "react"
import { BsTrash } from "react-icons/bs"
import { FaPencilAlt } from "react-icons/fa"
import Manage from "../Portals/ManageInput"
const DataTable = ({ data, reRender }) => {
    // console.log(data)
    const [open, setOpen] = useState(false)

    const handledelete = async (id) => {
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
                            <div className="UserNameData" scope="col"></div>
                            <div className="EmailData" scope="col"></div>
                            <div className="RoleData" scope="col"></div>
                            <div className="CampusData" scope="col"></div>
                            <div className="EditAndDelete" scope="col"></div>
                            <div className="EditAndDelete" scope="col"></div>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="AccountContainer">
                            <div className="AccountTableCells">{data.username}</div>
                            <div className="AccountTableCells4">{data.email}</div>
                            <div className="AccountTableCells3">{data.accessrole}</div>
                            <div className="AccountTableCells2">{data.campus_name}</div>
                            <div className="AccountTableCell5">
                                <div className="editBTN" onClick={() => setOpen(true)}><FaPencilAlt /></div>
                                <Manage open={open} close={() => setOpen(false)} data={data} reRender={reRender} />
                                <div className='deleteBTN' onClick={() => { handledelete(data.user_id) }} ><BsTrash /></div>
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
