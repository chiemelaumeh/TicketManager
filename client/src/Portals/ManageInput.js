import DataTable from "../Components 2/DataTable"
import ReactDOM from "react-dom"
const Manage = ({ close, open }) => {


    if (!open) return null
    return ReactDOM.createPortal(
        <><div className="over-lay">
            <div className="module-box">
                <div className="header-profile">
                    
                    <button onClick={() => close()}>X</button>
                </div>
                <DataTable />
                <button>save changes</button>
            </div>
        </div>
        </>, document.getElementById('Data_Table'))
}

export default Manage