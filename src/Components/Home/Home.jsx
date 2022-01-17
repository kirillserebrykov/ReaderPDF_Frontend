import React from 'react';
import Header from '../Header/Header';
import CardsDoc from './Card/CardsDoc';
import style from "../Header/Header.module.css"
import  './PopupAnim.css';
import LinearProgress from '@mui/material/LinearProgress';
import Error from '../Error/Error';
import { ButtonDelete, ButtonAdd } from './ActionsButtons/ButtonsAddAndDelete';
import AddBookContainer from './AddBook/AddBookContainer';
import { Routes, Route, useLocation} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const MarkUpHome = ({ dataCatalog, isLoading, addSelect, deleteSelectDoc, stateSelectedDocs }) => {
    const location = useLocation();
    

    const Cards = dataCatalog && dataCatalog.map(el => {
        return <div key={el._id} >
            <CardsDoc filename={el.filename} deleteSelectDoc={deleteSelectDoc} addSelect={addSelect} />
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
            <CSSTransition key={location.key} classNames="UploadFileAnimation" timeout={250}>
                <Routes>
                    <Route path=":StatusUploadFile" element={<AddBookContainer />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
        </>
    )
}



const Home = ({ dataCatalog, isLoading, error, refreshHandlerName, addSelect, deleteSelectDoc, stateSelectedDocs }) => {

    return <>
        <Header name="Библиотека" back_button={false} />
        {error ? <Error error={error}
            page="документ"
            refreshHandlerName={refreshHandlerName}
            isLoading={isLoading}
        /> : <MarkUpHome dataCatalog={dataCatalog} isLoading={isLoading} addSelect={addSelect} deleteSelectDoc={deleteSelectDoc} stateSelectedDocs={stateSelectedDocs} />}
    </>



}

export default Home