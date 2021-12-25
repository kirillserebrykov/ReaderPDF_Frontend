
import React, { useState } from 'react';
import style from './AddBook.module.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import NotesIcon from '@mui/icons-material/Notes';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Collapse from '@mui/material/Collapse'
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import DragAndDropWindow from './DragAndDropWindow';
import {useNavigate} from 'react-router-dom';


const SelectDocs = ({ files }) => {
    const filesName = files.map((file, index) => {
        const currentIndex = index + 1
        const LastFile = currentIndex === files.length
        return file.name + `${LastFile ? "" : ", "}`
    })
    return <div className={style.filesNameWrrap}>
        <span className={style.filesName}>{filesName}</span>
    </div>
}



const BtnNext = ({ isfiles }) => {
    return (
        <div className={`${style.uploadBookPopUpNext} ${Boolean(isfiles) ? style.a : style.b}`}>
            <IconButton color="success" aria-label="upload pdf" component="span">
                <NavigateNextIcon sx={{ fontSize: "30px" }} />
            </IconButton>
        </div>
    );
}
const BtnCancel = ({ wipeFiles }) => {
    return (
        <div className={style.uploadBookPopUpCancel}>
            <IconButton onClick={wipeFiles} color="success" aria-label="upload cancel" component="span">
                <DoDisturbOnIcon sx={{ fontSize: "30px" }} />
            </IconButton>
        </div>
    );
}

const Process = ({ isfiles }) => {
    return (
        <div className={style.uploadBookPopUpProcess}>
            <div className={`${style.uploadBookPopUpProcessActions} ${style.Upload}`}>
                <FileUploadIcon sx={isfiles ? { fontSize: "30px", fill: '#2e7d32' } : { fontSize: "30px", fill: '#4F4C4C' }} />
            </div>
            <div className={`${style.uploadBookPopUpProcessActions} ${style.MetaData}`}>
                <NotesIcon sx={{ fontSize: "30px", fill: '#4F4C4C' }} />
            </div>
            <div className={`${style.uploadBookPopUpProcessActions} ${style.Finish}`}>
                <DoneOutlineIcon sx={{ fontSize: "30px", fill: '#4F4C4C' }} />
            </div>
        </div>
    );
}

const Close = () => {
    const navigate = useNavigate();
    
    return (
        <div className={style.uploadBookPopUpClose}>
            <IconButton onClick={() => navigate('/')} sx={{ color: "#4F4C4C", }} aria-label="upload picture" component="span">
                <CloseIcon sx={{ fontSize: "30px" }} />
            </IconButton>
        </div>
    )
}


const AddBook = () => {
    const [files, setFile] = useState([])
    const isfiles = files[0]
    const wipeFiles = () => setFile([])
    return (
        <section className={style.uploadBookPopUp}>
                <Close />
                <Process isfiles={isfiles} />
            <span className={style.uploadBookPopUpTitle}>{!isfiles ? "Загрузить Документ" : "Загруженые Документы"}</span>
                <Collapse sx={{ width: "100%" }} in={Boolean(!isfiles)}>{<DragAndDropWindow setFile={setFile} />}</Collapse>
                <Collapse in={Boolean(isfiles)}>{<SelectDocs files={files} />}</Collapse>
            <nav className={style.navWrraper}>
                <BtnNext isfiles={isfiles} />
                <Collapse orientation='horizontal' in={Boolean(isfiles)}>{isfiles && <BtnCancel wipeFiles={wipeFiles} />}</Collapse>
            </nav>
        </section>
    );
}

export default AddBook;
