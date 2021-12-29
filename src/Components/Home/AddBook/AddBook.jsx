
import React, { useState } from 'react';
import style from './AddBook.module.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import NotesIcon from '@mui/icons-material/Notes';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Collapse from '@mui/material/Collapse'
import UploadFileZone from './UploadFileZone';
import { useLocation } from 'react-router-dom';
import { BtnNext, BtnCancel, BtnClose, InfoBtn } from './UIComponent/Buttons';

const SelectDocs = ({ files }) => {
    return files.map((file, index) => {
        if(file.status === "ok") return <span key={index} className={style.filesName}>"{file.file.name}" </span>
        else {
            return <span key={index} style={{ color: "#ca4343" }} title={file.errMess} className={style.filesName}>"{file.file.name}" </span>
        }    
    })
}

const styleProcess = {
    backgroundColor: "#78b666",
    border: "none",

}

const Process = ({ isfiles, StatusUpload }) => {
    return (
        <div className={style.uploadBookPopUpProcess}>
            <div style={StatusUpload === "/FillDescription" ? styleProcess : {}} className={`${style.uploadBookPopUpProcessActions} ${style.Upload}`}>
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





const InfoUpload = ({ isfiles, StatusUpload, setInfo, Info }) => {
    return <>
        <BtnClose />
        <InfoBtn setInfo={setInfo} Info={Info} />
        <Process isfiles={isfiles} StatusUpload={StatusUpload} />
    </>
}

const UploadFile = ({addDocsToState, wipeFiles, isfiles, files, setFile }) => {
    return <>
        <span className={style.uploadBookPopUpTitle}>{!isfiles ? "Загрузить Документ" : "Загруженые Документы"}</span>
        <Collapse sx={{ width: "100%" }} in={Boolean(!isfiles)}>{<UploadFileZone setFile={setFile} />}</Collapse>
        <Collapse in={Boolean(isfiles)}>{<div className={style.filesNameWrrap}><SelectDocs files={files} /></div>}</Collapse>
        <Collapse orientation='horizontal' in={Boolean(isfiles)}>{isfiles &&
            <nav className={style.navWrraper}>
                <BtnNext files={files} addDocsToState={addDocsToState} />
                <BtnCancel wipeFiles={wipeFiles} />
            </nav>
        }</Collapse>
    </>
}



const AddBook = ({addDocsToState}) => {
    const [files, setFile] = useState([])
    const [Info, setInfo] = useState(false)
    const wipeFiles = () => setFile([])
    const isfiles = files[0]
    const location = useLocation()
    const StatusUpload = location.pathname.replace("/Home", "")
    return (
        <>

            <section className={style.uploadBookPopUp}>
                <div className={`${style.Info} ${Info ? style.visibility : style.hidden} `}>
                    <p className={style.InfoText}>Чтобы загрузить файл, перетащите или выберете нужный файл. Если файл помечен <mark className={style.fileOk} >зелёным</mark> цветом тогда всё ok, но если файл помечен <mark className={style.fileErr}>красным</mark> тогда он не будет принят</p>
                </div>
                <InfoUpload isfiles={isfiles} StatusUpload={StatusUpload} setInfo={setInfo} Info={Info} />
                {StatusUpload === "/UploadFile" && <UploadFile addDocsToState={addDocsToState} isfiles={isfiles} wipeFiles={wipeFiles} files={files} setFile={setFile} />}
                {StatusUpload === "/FillDescription" && <div className="">
                    dsdsa
                </div>}
            </section>
        </>
    );
}

export default AddBook;
