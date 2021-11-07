import React from 'react';
import style from "./Header.module.css"
const Header = (props) => {
    console.log(props)
    return (
       <header className={style.Header} >
           <h1 className={style.headers} >{props.name}</h1>
       </header>
    )
}

export default Header