
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
import InfoIcon from '@mui/icons-material/Info';
import Slide from '@mui/material/Slide';

const SelectDocs = ({ files }) => {
    return  files.map((file, index) => { 
        const currentIndex = index + 1
        const LastFile = currentIndex === files.length
        console.log(file)
        return file.status === "ok" ? <span key={index} className={style.filesName}>"{file.file.name}" </span> :
         <span key={index} style={{color:"#ca4343"}} title={file.errMess} className={style.filesName}>"{file.file.name}" </span>
    })

     
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
const InfoBtn = ({setInfo, Info}) => {
   const Toggle = () =>{
        if(Info) setInfo(false)
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


const InfoUpload = ({ isfiles, StatusUpload, setInfo, Info }) => {
    return <>
        <Close />
        <InfoBtn setInfo={setInfo} Info={Info} />
        <Process isfiles={isfiles} StatusUpload={StatusUpload} />
    </>
}

const UploadFile = ({ wipeFiles, isfiles, files, setFile }) => {
    return <>
        <span className={style.uploadBookPopUpTitle}>{!isfiles ? "Загрузить Документ" : "Загруженые Документы"}</span>
        <Collapse sx={{ width: "100%" }} in={Boolean(!isfiles)}>{<UploadFileZone setFile={setFile} />}</Collapse>
        <Collapse in={Boolean(isfiles)}>{<div className={style.filesNameWrrap}><SelectDocs files={files} /></div>}</Collapse>
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
    const [Info, setInfo] = useState(false)
    const isfiles = files[0]
    const wipeFiles = () => setFile([])
    const location = useLocation()
    const StatusUpload = location.pathname.replace("/Home", "")
    return (
        <>
        
        <section className={style.uploadBookPopUp}>
        <div className={`${style.Info} ${Info ? style.visibility : style.hidden } `}>
            <p className={style.InfoText}>Чтобы загрузить файл, перетащите или выберете нужный файл. Если файл помечен <mark className={style.fileOk} >зелёным</mark> цветом тогда всё ok, но если файл помечен <mark className={style.fileErr}>красным</mark> тогда он не будет принят</p>   
        </div>
            <InfoUpload isfiles={isfiles} StatusUpload={StatusUpload} setInfo={setInfo} Info={Info}/>
            {StatusUpload === "/UploadFile" && <UploadFile  isfiles={isfiles} wipeFiles={wipeFiles} files={files} setFile={setFile} />}
            {StatusUpload === "/FillDescription" && <div className="">
                dsdsa
            </div>}

        </section>
        </>
    );
}

export default AddBook;
