import { Typography } from '@mui/material'
import React from 'react'
import CustomTimeline from "./Timeline";

import '../styles/Profile.css'

const Profile = () => {
  return (
    <div className='profile container_shadow'>
        <div className='profile_name'>
        <Typography className='name'>Wan</Typography>
        {/* <Typography className='title'>Title</Typography> */}
        </div>

        <figure className='profile_image'>
            <img src={require("../assets/images/displayimage.jpg")} alt="" />
        </figure>

        <div className='profile_information'>
            <CustomTimeline/>
            <br/> 
            <button> my Button</button>
        </div> 
    </div>
  )
}

export default Profile