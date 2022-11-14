
import { BsTrash } from "react-icons/bs"
import { FaPencilAlt } from "react-icons/fa"

const DataTable = ({ data }) => {
    // console.log(data)

    
    return (
        <>
            <div>
                <div id={data.user_id} className="Data_Table">
                    
                    <div >{data.username}</div>
                    <div >{data.email}</div>
                    <div >{data.accessrole}</div>
                    <div >{data.campus_name}</div>
                    <div>
                        <div ><FaPencilAlt /></div>
                        <div ><BsTrash /></div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default DataTable
// /admin/Accounts
