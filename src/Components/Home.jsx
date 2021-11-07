import React from 'react';
import Header from './Header';
import CardsDoc from './CardsDoc';
import style from "./Header.module.css"
import {Button,Box } from '@mui/material';

const Home = () => {
    return (
        <>
            <Header name="Библиотека" />
            <div className={style.wrraperHome}>
                <CardsDoc/>
                <CardsDoc/>
                <CardsDoc/>
                <CardsDoc/>
                <CardsDoc/>
            </div>
            <div   className={style.menu}>
            <Button color="secondary" sx={{width:"100px"}}  variant="contained" href="#contained-buttons" >Add</Button>
            </div>
        </>
    )
}

export default Home