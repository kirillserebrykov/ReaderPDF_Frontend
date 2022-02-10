
import React, { useState, useEffect } from 'react';
import style from './AddBook.module.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import NotesIcon from '@mui/icons-material/Notes';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Collapse from '@mui/material/Collapse'
import UploadFileZone from './UIComponent/UploadFileZone';
import { useLocation } from 'react-router-dom';
import { BtnNext, BtnCancel, BtnClose, InfoBtn } from './UIComponent/Buttons';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import Finish from './Finish/Finish';
import { useNavigate } from 'react-router-dom';



const SelectDocs = ({ files }) => {
    return files.map((file, index) => {
        if (file.status === "ok") return <span key={index} className={style.filesName}>"{file.file.name}" </span>
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
            <div style={StatusUpload === "/FillDescription" || "/Finish" ? styleProcess : {}} className={`${style.uploadBookPopUpProcessActions} ${style.Upload}`}>
                <FileUploadIcon sx={isfiles || StatusUpload === "/FillDescription" || "/Finish" ? { fontSize: "30px", fill: '#2e7d32' } : { fontSize: "30px", fill: '#4F4C4C' }} />
            </div>
            <div style={StatusUpload === "/Finish" ? styleProcess : {}} className={`${style.uploadBookPopUpProcessActions} ${style.MetaData}`}>
                <NotesIcon sx={StatusUpload === "/FillDescription" || "/Finish" ? { fontSize: "30px", fill: '#2e7d32' } : { fontSize: "30px", fill: '#4F4C4C' }} />
            </div>
            <div className={`${style.uploadBookPopUpProcessActions} ${style.Finish}`}>
                <DoneOutlineIcon sx={StatusUpload === "/Finish" ? { fontSize: "30px", fill: '#2e7d32' } : { fontSize: "30px", fill: '#4F4C4C' }} />
            </div>
        </div>
    );
}





const InfoUpload = ({ isfiles, StatusUpload, setInfo, Info, refetchCatalog, wipeFilesState }) => {
    return <>
        <BtnClose refetchCatalog={refetchCatalog} wipeFilesState={wipeFilesState} />
        <InfoBtn setInfo={setInfo} Info={Info} />
        <Process isfiles={isfiles} StatusUpload={StatusUpload} />
    </>
}

const UploadFile = ({ addDocsToState, wipeFiles, isfiles, files, setFile }) => {

    return <>
        <span className={style.uploadBookPopUpTitle}>{!isfiles ? "Выбрать Документы" : "Выбранные Документы"}</span>
        <Collapse sx={{ width: "100%" }} in={Boolean(!isfiles)}>{<UploadFileZone setFile={setFile} />}</Collapse>
        <Collapse in={Boolean(isfiles)}>{<div className={style.filesNameWrap}><SelectDocs files={files} /></div>}</Collapse>
        <Collapse orientation='horizontal' in={Boolean(isfiles)}>
            {isfiles &&
                <nav className={style.navWrapper}>
                    <BtnNext files={files} addDocsToState={addDocsToState} FullBorderRadius={false} RedirectTo={"FillDescription"} />
                    <BtnCancel wipeFiles={wipeFiles} />
                </nav>
            }
        </Collapse>
    </>
}



const AddBook = ({ addDocsToState, stateAddition, updatePost, result, refetchCatalog, wipeFilesState }) => {
    const [files, setFile] = useState([])
    const [Info, setInfo] = useState(false)
    const [stateForms, setStateForms] = useState([])
    const location = useLocation()
    const navigate = useNavigate();
    const wipeFiles = () => setFile([])
    const isfiles = files[0]
    const StatusUpload = location.pathname.replace("/Home", "")



    useEffect(() => {
        if ((StatusUpload === "/FillDescription" || "/Finish" ) && !stateAddition[0]) navigate("../UploadFile")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stateAddition])


    return (
        <>
            <section className={style.uploadBookPopUp}>
                <div className={`${style.Info} ${Info ? style.visibility : style.hidden} `}>
                    <p className={style.InfoText}>
                        Чтобы загрузить файл, перетащите или выберете нужный файл. Если файл помечен
                        <mark className={style.fileOk} >зелёным</mark> цветом тогда всё ok, но если файл помечен
                        <mark className={style.fileErr}>красным</mark> тогда он не будет принят
                    </p>
                </div>
                <InfoUpload wipeFilesState={wipeFilesState}  isfiles={isfiles} refetchCatalog={refetchCatalog} StatusUpload={StatusUpload} setInfo={setInfo} Info={Info} />
                {StatusUpload === "/UploadFile" && <UploadFile addDocsToState={addDocsToState} isfiles={isfiles} wipeFiles={wipeFiles} files={files} setFile={setFile} />}
                {StatusUpload === "/FillDescription" && <AdditionalInfo stateAddition={stateAddition} stateForms={stateForms} setStateForms={setStateForms} />}
                {StatusUpload === "/Finish" && <Finish updatePost={updatePost} result={result} stateAddition={stateAddition} stateForms={stateForms} />}

            </section>
        </>
    );
}

export default AddBook;
