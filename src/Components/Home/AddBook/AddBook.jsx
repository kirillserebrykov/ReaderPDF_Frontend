
import React from 'react';
import style from './AddBook.module.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import NotesIcon from '@mui/icons-material/Notes';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const AddBook = () => {
    return (
        <section className={style.uploadBookPopUp} >
            <div className={style.uploadBookPopUpClose}>
                <IconButton sx={{ color: "#4F4C4C", }} aria-label="upload picture" component="span">
                    <CloseIcon sx={{ fontSize: "30px" }} />
                </IconButton>
            </div>
            <div className={style.uploadBookPopUpProcess}>
                <div className={`${style.uploadBookPopUpProcessActions} ${style.Upload}`}>
                    <FileUploadIcon sx={{ fontSize: "30px", fill: '#4F4C4C' }} />
                </div>
                <div className={`${style.uploadBookPopUpProcessActions} ${style.MetaData}`}>
                    <NotesIcon sx={{ fontSize: "30px", fill: '#4F4C4C' }} />
                </div>
                <div className={`${style.uploadBookPopUpProcessActions} ${style.Finish}`}>
                    <DoneOutlineIcon sx={{ fontSize: "30px", fill: '#4F4C4C' }} />
                </div>
            </div>
            <span className={style.uploadBookPopUpTitle}>Добавить Документ</span>
            <div className={style.dropDownWrrap} >
                <div className={style.dropDown} >

                </div>
            </div>
            <div className={style.uploadBookPopUpNext}>
            <IconButton color="success"  aria-label="upload picture" component="span">
                    <NavigateNextIcon sx={{ fontSize: "30px" }} />
                </IconButton>
            </div>
            
        </section>
    );
}

export default AddBook;
