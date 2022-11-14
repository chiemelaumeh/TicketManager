import fakeData from "../Pages/dataMA"
const DataTable = ({data}) => {
    // console.log(data)
    return(
        <>
        <div>
            <div className="Data_Table">
            <div >{data.full_name}</div>
            <div >{data.email}</div>
            <div >{data.camp_id}</div>
           
            </div>
            
        </div>

        </>
    )
    }
    
    export default DataTable