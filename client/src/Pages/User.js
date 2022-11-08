import Profile from "../Portals/Profile"
import { useState } from 'react'

const User = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <h1>User</h1>
            <button onClick={() => setOpen(true)}>open profile module </button>
            <Profile close={() => setOpen(false)} open={open} />
        </>
    )
}

export default User