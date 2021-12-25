import React, { useState }from 'react'
import IconButton from '@mui/material/IconButton';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import style from './AddBook.module.css';

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
export default DragAndDropWindow