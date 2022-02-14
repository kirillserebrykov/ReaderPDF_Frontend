import React from "react";
import IconButton from "@mui/material/IconButton";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import style from "../AddFile.module.css";
import { validationFile } from "../validationFile";

const checkedFilesHandler = arrFile => arrFile.map(file => validationFile(file));

const UploadFileZone = ({ setFile }) => {
	function dragDropStartHandler(e) {
		e.preventDefault();
	}
	function dragDropEndHandler(e) {
		e.preventDefault();
	}
	function dragDropHandler(e) {
		e.preventDefault();
		setFile(checkedFilesHandler([...e.dataTransfer.files]));
	}
	function onFileChange(e) {
		e.preventDefault();
		setFile(checkedFilesHandler([...e.target.files]));
	}
	return (
		<div
			onDragStart={e => dragDropStartHandler(e)}
			onDragLeave={e => dragDropEndHandler(e)}
			onDragOver={e => dragDropStartHandler(e)}
			onDrop={e => dragDropHandler(e)}
			className={style.DragAndDropWrap}
		>
			<div className={style.DragAndDrop}>
				<IconButton variant="contained" component="label">
					<UploadFileIcon sx={{ fontSize: "60px", fill: "#4F4C4C" }} />
					<input multiple accept=".pdf" onChange={onFileChange} type="file" hidden />
				</IconButton>
			</div>
		</div>
	);
};
export default UploadFileZone;
