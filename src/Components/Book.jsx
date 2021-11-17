import React from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import style from './Book.module.css';
import Button from '@mui/material/Button';
const Book = ({ InfoBook }) => {

    const navigate = useNavigate();
    let { metadata } = InfoBook
    
    const RederectToReadBook = () => {navigate(`/Read/${InfoBook && InfoBook.filename}`)}
    const Name = metadata && metadata.filename.replace(".pdf", "")

    return <>
            <Header name={Name && Name} back_button={true} />
                <section className={style.wrraperBook}>
                    <div className={style.cover}>
                        <img src="https://s1.livelib.ru/boocover/1002110803/200x305/bce2/boocover.jpg" alt="" />
                        <Button className={style.readButton} onClick={RederectToReadBook} color="success" variant="outlined">Читать</Button>
                    </div>
                    <article className={style.description}>
                        <h2 className={style.descriptionTitle} >Автор: {metadata && metadata.author}</h2>
                        <h2 className={style.descriptionTitle} >Описания</h2>
                        <p className={style.descriptionText}>{metadata && metadata.description}</p>
                    </article>
                </section>
            </>
}


export default Book