import React from 'react'
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import style from './Book.module.css';
import Button from '@mui/material/Button';
import Error from '../Error/Error';
import LinearProgress from '@mui/material/LinearProgress';

const BookUI = ({metadata, RederectToReadBook, Name, isLoading}) => {
    return <>
    {isLoading  ? <Header name={Name ? Name : "Загрузка..."} back_button={true} /> : <Header name={Name ? Name : "Ошибка"} back_button={true} />}
    {!isLoading ?  <section className={style.wrraperBook}>
                <div className={style.cover}>
                    <img src="https://s1.livelib.ru/boocover/1002110803/200x305/bce2/boocover.jpg" alt="" />
                    <Button className={style.readButton} onClick={RederectToReadBook} color="success" variant="outlined">Читать</Button>
            </div>
             <article className={style.description}>
                <h2 className={style.descriptionTitle} >Автор: {metadata && metadata.author}</h2>
                <h2 className={style.descriptionTitle} >Описания</h2>
                <p className={style.descriptionText}>{metadata && metadata.description}</p>
             </article>
        </section> : <LinearProgress color="inherit" /> }
    </>
}







const AboutBook = ({ InfoBook, error, isLoading, filename, refreshHandlerName }) => {
    const navigate = useNavigate();
    const { metadata } = InfoBook
    const RederectToReadBook = () => { navigate(`/Read/${InfoBook && InfoBook.filename}`) }
    const Name = metadata && metadata.filename.replace(".pdf", "")


    return  <>
                {error ? 
                <>
                    <Header name={Name ? Name : "Ошибка"} back_button={true} />
                    <Error  error={error}
                            page="документ"
                            refreshHandlerName={refreshHandlerName}
                            filename={filename}  
                            isLoading={isLoading}
                    /> 
                </>
                : <BookUI metadata={metadata} RederectToReadBook={RederectToReadBook} Name={Name} isLoading={isLoading} />
                }
            </>
}


export default AboutBook