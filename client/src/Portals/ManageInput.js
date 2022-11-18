import { useState } from 'react'
import ReactDOM from "react-dom";
import axios from "axios";



const Manage = ({ close, open, data, reRender }) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')

  const editOne = async (id) => {

    const { data } = await axios.patch(`http://localhost:6001/admin/Accounts/edit/${id}`, { userName, email });
    setUserName('')
    setEmail('')
    reRender()
  }
  const handleUsername = (e) => {
    setUserName(e.target.value)
   
  }
  const handleEmail = (e) => {
    setEmail(e.target.value) 
    // console.log(e.target.value)
  }
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="over-lay">
        <div className="module-box">
          <div>
            <button onClick={() => close()}>X</button>
          </div>
          
          <button onClick={() => editOne(data.user_id)}>save changes</button>
          <form>
            <p>Current Name: {data.username}</p>
            <label>Edit Name: </label><input type='text' onChange={handleUsername} value={userName}></input>
            <p>Current Email: {data.email}</p>
            <label>Edit Email: </label><input type='text' onChange={handleEmail} value={email}></input>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
export default Manage;