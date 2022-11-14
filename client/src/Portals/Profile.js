import ReactDOM from "react-dom"
import ProfileInput from "./ProfileInput"

const Profile = ({ close, open }) => {


    if (!open) return null
    return ReactDOM.createPortal(
        <><div className="over-lay">
            <div className="module-box">
                <div className="header-profile">
                    <h1>Profile Settings</h1>
                    <button onClick={() => close()}>X</button>
                </div>
                <ProfileInput />
                <button>save changes</button>
            </div>
        </div>
        </>, document.getElementById('portal'))
}

export default Profile