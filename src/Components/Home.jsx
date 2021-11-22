import React from 'react';
import Header from './Header';
import CardsDoc from './CardsDoc';
import style from "./Header.module.css"
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress from '@mui/material/LinearProgress';
import Error from './Error';



const MarkUpHome = (Cards, isLoading) => {
    return (
        <>
            {isLoading && <LinearProgress color="inherit" />}
                <section className={style.wrraperHome}>
                    {Cards && Cards}
                </section>
                <nav className={style.WrraperButton}>
                    <div className={style.ButtonsBackground}>
                        <IconButton className={style.ButtonAdd} color="success" sx={{ with: "80px", height: "80px" }}  >
                            <AddIcon fontSize="large" color="success" />
                        </IconButton>
                    </div>
                    <div className={style.ButtonsBackground}>
                        <IconButton className={style.ButtonAdd} sx={{ with: "80px", height: "80px" }}  >
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </div>
                </nav>
        </>
    )
}



const Home = ({ dataCatalog, isLoading, error, refreshHandlerName }) => {
  
    const Cards = dataCatalog && dataCatalog.map(el => {
        return <div key={el._id} >
            <CardsDoc filename={el.filename} />
        </div>
    })
    
    return <>
                <Header name="Библиотека"   back_button={false} />
                {error ? <Error  error={error} refreshHandlerName={refreshHandlerName}  /> : MarkUpHome(Cards, isLoading)}
        </>



}

export default Home