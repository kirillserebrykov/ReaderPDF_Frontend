import React from 'react';
import Header from '../Header/Header';
import CardsDoc from './Card/CardsDoc';
import style from "./home.module.css"
import './PopupAnim.css';
import LinearProgress from '@mui/material/LinearProgress';
import Error from '../Error/Error';
import { ButtonDelete, ButtonAdd } from './ActionsButtons/ButtonsAddAndDelete';
import AddBookContainer from './AddBook/AddBookContainer';
import { Routes, Route } from "react-router-dom";
import { TransitionGroup  } from "react-transition-group";
import { usePrefetch } from '../../store/data-layer-level/getRequests'


const MarkUpHome = ({ dataCatalog, isLoading, addSelect, deleteSelectDoc, stateSelectedDocs, refetchCatalog }) => {
    const refreshHandler =  usePrefetch( "GetCatalog")
    const Cards = dataCatalog && dataCatalog.map(el => {

        return <div key={el._id} >
            <CardsDoc filename={el.filename} stateSelectedDocs={stateSelectedDocs}  deleteSelectDoc={deleteSelectDoc} addSelect={addSelect} />
        </div>
    })

    return (
        <>
            {isLoading && <LinearProgress color="inherit" />}
            <section className={style.wrraperHome}>
                {Cards && Cards}
            </section>
            <nav className={style.WrraperButton}>
                <ButtonAdd stateSelectedDocs={stateSelectedDocs} />
                <ButtonDelete stateSelectedDocs={stateSelectedDocs} />
            </nav>
            <TransitionGroup>
                <Routes>
                    <Route path=":StatusUploadFile/*" element={<AddBookContainer refetchCatalog={refetchCatalog} />} />
                </Routes>
            </TransitionGroup>
            
        </>
    )
}



const Home = ({ dataCatalog, isLoading, error, refreshHandlerName, addSelect, deleteSelectDoc, stateSelectedDocs, refetchCatalog }) => {

    return <>
        <Header name="Библиотека" back_button={false} />
        {error ? <Error error={error}
            page="документ"
            refreshHandlerName={refreshHandlerName}
            isLoading={isLoading}
        /> : 
        <MarkUpHome dataCatalog={dataCatalog} 
        isLoading={isLoading} addSelect={addSelect} 
        deleteSelectDoc={deleteSelectDoc} 
        stateSelectedDocs={stateSelectedDocs}
        refetchCatalog={refetchCatalog} />}
    </>



}

export default Home