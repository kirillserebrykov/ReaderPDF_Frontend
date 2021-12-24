
import React, { useState } from 'react';
import style from './AddBook.module.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import NotesIcon from '@mui/icons-material/Notes';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Collapse from '@mui/material/Collapse'

const DragAndDropWindow = ({ setFile }) => {
    const [drag, setDrag] = useState(false)

    function dragDropStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }
    function dragDropEndHandler(e) {
        e.preventDefault();
        setDrag(false)
    }
    function dragDropHandler(e) {
        e.preventDefault();
        setFile([...e.dataTransfer.files])

    }
    function onFileChange(e) {
        e.preventDefault();
        setFile([...e.target.files])

    }
    return <div onDragStart={e => dragDropStartHandler(e)}
        onDragLeave={e => dragDropEndHandler(e)}
        onDragOver={e => dragDropStartHandler(e)}
        onDrop={e => dragDropHandler(e)}
        className={style.DragAndDropWrrap} >
        <div className={style.DragAndDrop} >
            <IconButton variant="contained" component="label">
                <UploadFileIcon sx={{ fontSize: "60px", fill: '#4F4C4C' }} />
                <input multiple accept=".pdf" onChange={onFileChange} type="file" hidden />
            </IconButton>
        </div>

    </div>

}



const SelectDocs = ({ files }) => {

    const filesName = files.map((file, index) => {
        const currentIndex = index + 1
        const LastFile = currentIndex === files.length
        return file.name + `${LastFile ? "" : ", "}`
    })
    return  <div className={style.filesNameWrrap}>
                <span className={style.filesName}>{filesName}</span>
            </div>
}




const AddBook = () => {
    const [files, setFile] = useState([])
    const isfiles = files[0]
    return (
        <section className={style.uploadBookPopUp}>
            <div className={style.uploadBookPopUpClose}>
                <IconButton sx={{ color: "#4F4C4C", }} aria-label="upload picture" component="span">
                    <CloseIcon sx={{ fontSize: "30px" }} />
                </IconButton>
            </div>
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
            <span className={style.uploadBookPopUpTitle}>{!isfiles ? "Загрузить Документ" : "Загруженые Документ"}</span>
            <Collapse sx={{ width: "100%" }} in={Boolean(!isfiles)}>{<DragAndDropWindow setFile={setFile} />}</Collapse>
            <Collapse in={Boolean(isfiles)}>{<SelectDocs files={files} />}</Collapse>
            <div className={style.uploadBookPopUpNext}>
                <IconButton color="success" aria-label="upload picture" component="span">
                    <NavigateNextIcon sx={{ fontSize: "30px" }} />
                </IconButton>
            </div>
        
        </section>
    );
}

export default AddBook;
