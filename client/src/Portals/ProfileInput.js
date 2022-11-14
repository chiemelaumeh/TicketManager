


const ProfileInput = () => {


    return (
        <>
            <div className="column-1">
                <div className="image-header">
                    <div className="img-picture" >img</div>
                    <p>Profile pic</p>
                </div>

                <form className="form-settings">
                    <div className="form-settings-input">
                        <input className="input-settings" type='text' placeholder="Username" />
                        <input className="input-settings" type='text' placeholder="Role" />
                        <input className="input-settings" type='text' placeholder="Campus" />
                        <input className="input-settings" type='text' placeholder="Email" />
                    </div>
                </form>
            </div>
        </>
    )
}


export default ProfileInput