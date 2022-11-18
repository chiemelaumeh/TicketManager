import DataTable from "../Components 2/DataTable";
import ReactDOM from "react-dom";


const Manage = ({ close, open, data }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="over-lay">
        <div className="module-box">
          <div>
            <button onClick={() => close()}>X</button>
          </div>
          {/* <DataTable /> */}
          <button>save changes</button>
          <form>
            <p>Current Name: {data.username}</p>
                <label>Edit Name: </label><input></input>
            <p>Current Email: {data.email}</p>
                <label>Edit Email: </label><input></input>
            <p>Current Role: {data.accessrole}</p>
                <label>Edit Role: </label><input></input>
            <p>Current Campus: {data.campus_name}</p>
                <label>Edit Role: </label><input></input>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
export default Manage;
