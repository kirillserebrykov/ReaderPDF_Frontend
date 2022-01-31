import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import "./Card.css"
import { useSingleAndDoubleClick } from "../../Snippets/doubleClick"
import CheckIcon from '@mui/icons-material/Check';
import Fade from '@mui/material/Fade';

const checkSelectInState = (state, fileName, handlerState) =>{
    state && state.map(el => {
        if(el === fileName) handlerState(true)
    })
}


const CardsDoc = (props) => {
    const navigate = useNavigate();
    const [isSelect, setIsSelect] = useState(false)
    
    useEffect(() => {
        checkSelectInState(props.stateSelectedDocs, props.filename, setIsSelect)
    }, [props.stateSelectedDocs])
    
    const rederect = () => () => {
        if (isSelect) return
        else navigate(`/Book/${props.filename}`)
    }
    const select = () => () => {
        if(!isSelect)  props.addSelect(props.filename)
        setIsSelect(true)
    }
    const cancelSelection = (e) => {
        setIsSelect(false)
        props.deleteSelectDoc(props.filename)
        e.stopPropagation()
    }

    
    return <div onClick={useSingleAndDoubleClick(rederect(), select())} className={`cardsBack${isSelect ? "Active" : ""}`} >
        <div className={`cards${isSelect ? "Active" : ""}`}></div>
        {isSelect &&
        <Fade  in={isSelect} timeout={250}>
                <div className="Check" onClick={(e) => cancelSelection(e)}><CheckIcon color="success" style={{ fontSize: 50 }} /></div>
        </Fade>
        }
    </div>
}

export default CardsDoc