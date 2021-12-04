import React from 'react';
import style from "./Header.module.css"
import { useNavigate } from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



const Header = (props) => {
    const navigate = useNavigate();

    return (
       <header className={style.Header} >
           {props.back_button && <ArrowBackIosNewIcon onClick={() => navigate(-1)} sx={{color:"#ffff",marginLeft:"20px"}} />}
           <h1 className={style.headers} >{props.name}</h1>
       </header>
    )
}

export default Header