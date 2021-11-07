import React from 'react';
import Header from './Header';
import CardsDoc from './CardsDoc';
import style from "./Header.module.css"
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
const Home = () => {
    return (
        <>
            <Header name="Библиотека" />
            <section className={style.wrraperHome}>
                <CardsDoc />
                <CardsDoc />
                <CardsDoc />
                <CardsDoc />
                <CardsDoc />
            </section>
            <nav className={style.WrraperButton}>
                <div className={style.ButtonsBackground}>
                    <IconButton className={style.ButtonAdd} color="success" sx={{with: "80px",height: "80px"}}  >
                        <AddIcon fontSize="large" color="success" />
                    </IconButton>
                </div>
                <div className={style.ButtonsBackground}>
                    <IconButton className={style.ButtonAdd} sx={{with: "80px",height: "80px"}}  >
                        <DeleteIcon fontSize="large"  />
                    </IconButton>
                </div>
            </nav>
        </>
    )
}

export default Home