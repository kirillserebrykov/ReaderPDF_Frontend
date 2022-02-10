import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import "./Card.css"
import { useSingleAndDoubleClick } from "../../Snippets/doubleClick"
import CheckIcon from '@mui/icons-material/Check';
import Fade from '@mui/material/Fade';
import { ColorExtractor } from 'react-color-extractor'
import { redirectHandler, selectHandler, cancelSelectionHandler } from './CardHandler';

const checkSelectInState = (state, fileName, handlerState) => {
    state && state.map(el => {
        if (el === fileName) {
            handlerState(true)
            return null
        } else return null
    })
}


const CardsFile = ({ filename, deleteSelectDoc, addSelect, stateSelectedDocs }) => {
    const navigate = useNavigate();
    const [isSelect, setIsSelect] = useState(false)
    const [Color, setColor] = useState("")
    const CoverFileURL = `http://localhost:5000/cdn/CoverFile?fileName=${filename}`
    useEffect(() => {
        checkSelectInState(stateSelectedDocs, filename, setIsSelect)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stateSelectedDocs])

    const inlineStyleCard = {
        backgroundImage: `url("${CoverFileURL}")`
    }

    return <div onClick={useSingleAndDoubleClick(
                        redirectHandler(filename, isSelect, navigate), 
                        selectHandler(addSelect, setIsSelect, filename, isSelect))}
        className={`cardBack${isSelect ? "Active" : ""}`}
        style={{ background: Color }} >
        <ColorExtractor src={CoverFileURL} getColors={colors => setColor(colors[2])}/>
        <div style={inlineStyleCard} className={`card${isSelect ? "Active" : ""}`}></div>
        {isSelect &&
            <Fade in={isSelect} timeout={250}>
                <div className="Check" onClick={(e) => cancelSelectionHandler(e, setIsSelect, filename, deleteSelectDoc)}>
                    <CheckIcon color="success" style={{ fontSize: 50 }} />
                </div>
            </Fade>
        }
    </div>
}

export default CardsFile