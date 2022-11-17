import DataTable from "../Components 2/DataTable"
import ReactDOM from "react-dom"
const Manage = ({ close, open, data }) => {
    if (!open) return null
    return ReactDOM.createPortal(
        <><div className="over-lay">
            <div className="module-box">
                <div >
                    <button onClick={() => close()}>X</button>
                </div>
                {/* <DataTable /> */}
                <button>save changes</button>
                <h1>{data.username}</h1>
            </div>
        </div>
        </>, document.getElementById('portal'))
}
export default Manage