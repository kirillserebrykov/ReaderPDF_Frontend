import React from 'react';
import FileUploadIcon from "@mui/icons-material/FileUpload";
import NotesIcon from "@mui/icons-material/Notes";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import style from "../AddFile.module.css";


const styleProcess = {
    backgroundColor: "#78b666",
    border: "none",
};

const StatusIcon = ({ ActiveStatusUpload, IconComponent, BacklightStatusUpload, Name }) => {
    return <div
        style={BacklightStatusUpload ? styleProcess : {}}
        className={`${style.uploadFilePopUpProcessActions} ${style[Name]}`}
    >
        <IconComponent
            sx={
                ActiveStatusUpload
                    ? { fontSize: "30px", fill: "#2e7d32" }
                    : { fontSize: "30px", fill: "#4F4C4C" }
            }
        />
    </div>
}


const Process = ({ StatusUpload }) => {
    const ActiveStatusUpload = Boolean(StatusUpload === "/FillDescription" || "/Finish")
    const BacklightStatusUpload = Boolean(StatusUpload === "/Finish")
    return (
        <div className={style.uploadFilePopUpProcess}>
            <StatusIcon Name={"Upload"} ActiveStatusUpload={ActiveStatusUpload} BacklightStatusUpload={ActiveStatusUpload} IconComponent={FileUploadIcon} />
            <StatusIcon Name={"Description"} ActiveStatusUpload={ActiveStatusUpload} BacklightStatusUpload={BacklightStatusUpload} IconComponent={NotesIcon} />
            <StatusIcon Name={"Finish"} ActiveStatusUpload={BacklightStatusUpload} BacklightStatusUpload={false} IconComponent={DoneOutlineIcon} />
        </div>
    );
};

export default Process