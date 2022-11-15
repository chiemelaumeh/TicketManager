
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
        await axios.delete(`http://localhost:6001/admin/Account/delete/${id}`)
        reRender()
        // console.log(id)
// console.log(data.user_id)
    }
    return (
        <>
            <div>
                <div id={data.user_id} className="Data_Table">
                    
                    <div >{data.username}</div>
                    <div >{data.email}</div>
                    <div >{data.accessrole}</div>
                    <div >{data.campus_name}</div>
                    <div>
                        <div ><FaPencilAlt />
                    
                        </div>
                        <div onClick={() => {handledelete(data.user_id)}} ><BsTrash /></div>
                    </div>
                </div>

            </div>

        </>
    )
}


export default DataTable
// /admin/Accounts
