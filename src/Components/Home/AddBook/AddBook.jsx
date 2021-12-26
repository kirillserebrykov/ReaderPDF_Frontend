
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
import UploadFileZone from './UploadFileZone';
import { useNavigate, useLocation } from 'react-router-dom';



const SelectDocs = ({ files }) => {

    
    const filesName = files.map((file, index) => { 
        
        const currentIndex = index + 1
        const LastFile = currentIndex === files.length
        console.log(file)
        return file.file && `"${file.file.name}"${LastFile ? "" : ", "}`
    })

    return <div className={style.filesNameWrrap}>
        <span className={style.filesName}>{filesName}</span>
        
    </div>
}



const BtnNext = () => {
    const navigate = useNavigate();
    return (
        <div className={style.uploadBookPopUpNext}>
            <IconButton onClick={() => navigate('../FillDescription')} color="success" aria-label="upload pdf" component="span">
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
const styleProcess = {
    backgroundColor:"#78b666", 
    border:"none",
    
}

const Process = ({ isfiles, StatusUpload }) => {
    return (
        <div className={style.uploadBookPopUpProcess}>
            <div style={StatusUpload === "/FillDescription" ? styleProcess : {} } className={`${style.uploadBookPopUpProcessActions} ${style.Upload}`}>
                <FileUploadIcon sx={isfiles || StatusUpload === "/FillDescription" ? { fontSize: "30px", fill: '#2e7d32' } : { fontSize: "30px", fill: '#4F4C4C' }} />
            </div>
            <div className={`${style.uploadBookPopUpProcessActions} ${style.MetaData}`}>
                <NotesIcon sx={StatusUpload === "/FillDescription" ? { fontSize: "30px", fill: '#2e7d32' } : { fontSize: "30px", fill: '#4F4C4C' }} />
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

const InfoUpload = ({ isfiles, StatusUpload }) => {
    return <>
        <Close />
        <Process isfiles={isfiles} StatusUpload={StatusUpload} />
    </>
}

const UploadFile = ({ wipeFiles, isfiles, files, setFile }) => {
    return <>
        <span className={style.uploadBookPopUpTitle}>{!isfiles ? "Загрузить Документ" : "Загруженые Документы"}</span>
        <Collapse sx={{ width: "100%" }} in={Boolean(!isfiles)}>{<UploadFileZone setFile={setFile} />}</Collapse>
        <Collapse in={Boolean(isfiles)}>{<SelectDocs files={files} />}</Collapse>
        <Collapse orientation='horizontal' in={Boolean(isfiles)}>{isfiles &&
            <nav className={style.navWrraper}>
                <BtnNext />
                <BtnCancel wipeFiles={wipeFiles} />
            </nav>
        }</Collapse>
    </>
}



const AddBook = () => {
    const [files, setFile] = useState([])
    const isfiles = files[0]
    const wipeFiles = () => setFile([])
    const location = useLocation()
    const StatusUpload = location.pathname.replace("/Home", "")
    return (
        <section className={style.uploadBookPopUp}>
            <InfoUpload isfiles={isfiles} StatusUpload={StatusUpload} />
            {StatusUpload === "/UploadFile" && <UploadFile isfiles={isfiles} wipeFiles={wipeFiles} files={files} setFile={setFile} />}
            {StatusUpload === "/FillDescription" && <div className="">
                dsdsa
            </div>}

        </section>
    );
}

export default AddBook;
