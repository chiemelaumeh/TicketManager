import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import Avatar from 'react-avatar';
import { Button } from 'primereact/button'

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

const User = () => {
    const [src, setSrc] = useState(false);
    const [image, setImage] = useState("")
    const [imageCrop, setImageCrop] = useState(false)
    const [profile, setProfile] = useState([])
    const [pview, setPview] = useState(false);
    const profileFinal = profile.map((item) => item.pview);

    const onClose = () => {
        setPview(null);
    };

    const onCrop = (view) => {
        setPview(view)
    }

    const saveCropImage = () => {
        setProfile([...profile, { pview }])
        setImageCrop(false)
    }

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substring(0, 5) === "image") {
            setImage(file);
        } else {
            setImage(null)
        }
    }

    return (
        <>
            <h1>Welcome, user!</h1>
            <div className='profile_img text-center p-4'>
                <div className='flex flex-column justify-content-center align-items-center'>
                    <img
                        style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "4px solid green",
                        }}
                        onClick={() => setImageCrop(true)}
                        src={profileFinal.length ? profileFinal : image} alt="" />
                    {/* <label htmlFor='' className='mt-3 font-semibold text-5x1'>placeHolder</label> */}
                    <Dialog
                        visible={imageCrop}
                        header={() => (
                            <p htmlFor="" className='text-2x1 font-semibold textColor'>
                                Update Profile Picture
                            </p>
                        )}
                        onHide={() => setImageCrop(false)}
                    >

                        <div className='confirmation-content flex flex-column align-items-center'>
                            <Avatar
                                width={500}
                                height={400}
                                onCrop={onCrop}
                                onClose={onClose}
                                src={src}
                                shadingColor={"#474649"}
                                backgroundColor={"#474649"}
                            />



                            <div className='flex flex-column align-items-center mt-5 w-12'>
                                <div className='flex justify-content-around w-12 mt-4'>
                                    <Button
                                        onClick={saveCropImage}
                                        label="Save"
                                        icon="pi pi-check"
                                    />
                                </div>
                            </div>
                        </div>
                    </Dialog>

                    <InputText
                        type="file"
                        accept='/image/*'
                        style={{ display: "none" }}

                        onChange={handleChange}

                    />

                </div>
            </div>



        </>
    )
}

export default User