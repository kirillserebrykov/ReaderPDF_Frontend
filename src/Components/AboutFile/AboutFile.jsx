import React from 'react'
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import style from './AboutFile.module.css';
import Error from '../Error/Error';
import LinearProgress from '@mui/material/LinearProgress';

const AboutFileUI = ({metadata, RederectToReadBook, Name, isLoading}) => {
    return <>
    {isLoading  ? <Header name={Name ? Name : "Загрузка..."} back_button={true} /> : <Header name={Name ? Name : "Ошибка"} back_button={true} />}
    {!isLoading ?  <section className={style.wrraperBook}>
                <div className={style.cover}>
                    <img  src={`http://localhost:5000/cdn/CoverFile?fileName=${Name}.pdf`} alt="" />
                    <div className={style.readBtnWrap}>
                        <button onClick={RederectToReadBook} className={style.readBtn} ><span>Читать</span></button>
                    </div>
                    
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
                : <AboutFileUI metadata={metadata} RederectToReadBook={RederectToReadBook} Name={Name} isLoading={isLoading} />
                }
            </>
}


export default AboutBook