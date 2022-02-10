import React from 'react';
import Header from '../Header/Header';
import CardsFile from './Card/CardsFile';
import style from "./home.module.css"
import './PopupAnim.css';
import LinearProgress from '@mui/material/LinearProgress';
import Error from '../Error/Error';
import { ButtonDelete, ButtonAdd } from './ActionsButtons/ButtonsAddAndDelete';
import AddBookContainer from './AddBook/AddBookContainer';
import { Routes, Route } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import Tumbleweed from './Tumbleweed/Tumbleweed';
;



const HomeUI = ({ dataCatalog, isLoading, addSelect, deleteSelectDoc, stateSelectedDocs, refetchCatalog, wipeState }) => {
    const Cards = dataCatalog && dataCatalog.map((el) => {
        return <div key={el._id} className={style.cardWrap}>
            <CardsFile filename={el.filename} stateSelectedDocs={stateSelectedDocs} deleteSelectDoc={deleteSelectDoc} addSelect={addSelect} />
        </div>
    })

    return (
        <>
            {isLoading && <LinearProgress color="inherit" />}
            <section className={style.wrapperHome}>
                {Cards && Cards}
            </section>
            <nav className={style.WrapperButton}>
                <ButtonAdd stateSelectedDocs={stateSelectedDocs} />
                <ButtonDelete wipeState={wipeState}  refetchCatalog={refetchCatalog} stateSelectedDocs={stateSelectedDocs} />
            </nav>
            <TransitionGroup>
                <Routes>
                    <Route path=":StatusUploadFile/*" element={<AddBookContainer refetchCatalog={refetchCatalog} />} />
                </Routes>
            </TransitionGroup>
        </>
    )
}



const Home = ({ dataCatalog, isLoading, error, wipeState, addSelect, deleteSelectDoc, stateSelectedDocs, refetchCatalog }) => {
    const isCatalog = Boolean(dataCatalog) ? dataCatalog[0] : true
    
    return <>
        <Header name="Библиотека" back_button={false} />
        {error ? <Error error={error}
            page="документ"
            refetchCatalog={refetchCatalog}
            isLoading={isLoading}
        /> :
            <HomeUI dataCatalog={dataCatalog && dataCatalog}
                isLoading={isLoading} addSelect={addSelect}
                deleteSelectDoc={deleteSelectDoc}
                stateSelectedDocs={stateSelectedDocs}
                refetchCatalog={refetchCatalog}
                wipeState={wipeState}
                 />}
        {!isCatalog && <Tumbleweed />}
        
    </>



}

export default Home