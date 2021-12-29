import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from '../AddBook.module.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export const BtnNext = ({addDocsToState, files}) => {
    const navigate = useNavigate();
    
    const ClickHanddler = () => {
        files.map(file =>{
            const localDocUrl = window.URL.createObjectURL(file.file);
            addDocsToState(localDocUrl)
        })
        
        navigate('../FillDescription')
        
    }
    return (
        <div className={style.uploadBookPopUpNext}>
            <IconButton onClick={ClickHanddler} color="success" aria-label="upload pdf" component="span">
                <NavigateNextIcon sx={{ fontSize: "30px" }} />
            </IconButton>
        </div>
    );
}

export const BtnCancel = ({ wipeFiles }) => {
    return (
        <div className={style.uploadBookPopUpCancel}>
            <IconButton onClick={wipeFiles} color="success" aria-label="upload cancel" component="span">
                <DoDisturbOnIcon sx={{ fontSize: "30px" }} />
            </IconButton>
        </div>
    );
}

export const BtnClose = () => {
    const navigate = useNavigate();
    return (
        <div className={style.uploadBookPopUpClose}>
            <IconButton onClick={() => navigate('/')} sx={{ color: "#4F4C4C", }} aria-label="upload picture" component="span">
                <CloseIcon sx={{ fontSize: "30px" }} />
            </IconButton>
        </div>
    )
}


export const InfoBtn = ({ setInfo, Info }) => {
    const Toggle = () => {
        if (Info) setInfo(false)
        else setInfo(true)
    }
    return (
        <div className={style.uploadBookPopUpInfo}>
            <IconButton onClick={Toggle} sx={{ color: "#4F4C4C", }} aria-label="upload picture" component="span">
                <InfoIcon sx={{ fontSize: "30px" }} />
            </IconButton>
        </div>
    )
}