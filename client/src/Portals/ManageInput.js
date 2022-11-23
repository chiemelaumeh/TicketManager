import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Manage = ({ close, open, data, reRender }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const editOne = async (id) => {
    const { data } = await axios.patch(
      `https://taskappapi.onrender.com/admin/Accounts/edit/${id}`,
      { userName, email }
    );
    setUserName("");
    setEmail("");
    reRender();
  };
  const handleSumbit = (e) => {
    e.preventDefault();
  };
  const handleUsername = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value)
  };
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="over-lay">
        <div className="module-box">
          <form className="editForm" onSubmit={handleSumbit}>
            <p>Current Name: {data.username}</p>
            <label className="editLabels">Edit Name: </label>
            <input
              type="text"
              onChange={handleUsername}
              value={userName}
              required
            ></input>
            <p>Current Email: {data.email}</p>
            <label>Edit Email: </label>
            <input
              type="email"
              onChange={handleEmail}
              value={email}
            ></input>
            <br></br>
            <div>
            
              <button
                className="editBtns"
                disabled={!userName && !email}
                onClick={() => editOne(data.user_id)}
              >
                Save Changes
              </button>
              <button className="editBtns" onClick={() => close()}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
export default Manage;
