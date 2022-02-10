import React from 'react';
import style from "./Header.module.css"
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



const Header = ({back_button, name}) => {
    const navigate = useNavigate();
    console.log(1)
    return (
       <header className={style.Header} >
           {back_button && <ArrowBackIosNewIcon onClick={() => navigate(-1)} sx={{color:"#ffff",marginLeft:"20px"}} />}
           <h1 className={style.headers} >{name}</h1>
       </header>
    )
}

export default Header