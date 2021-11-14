import React from 'react';
import { useNavigate } from 'react-router-dom'
import "./Card.css"


const CardsDoc = (props) => {
    const navigate = useNavigate();

    return <div onClick={() => navigate(`/Book/${props.filename}`)} className="cardsBack">
        <div className="cards"></div>  
    </div>
}

export default CardsDoc