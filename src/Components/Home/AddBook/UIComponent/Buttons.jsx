import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Buttons.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDocs } from "../../../../store/uploadDocSlice";
import { useDispatch } from "react-redux";

const AddSelectedFile = (files, handlerAddToState) => {
	files.map(File => {
		if (File.status === "ok") {
			const localDocUrl = window.URL.createObjectURL(File.file);
			let FileName = File.file.name;
			handlerAddToState({ [FileName]: localDocUrl });
			return null;
		} else return null;
	});
};

export const BtnNext = ({ addDocsToState, files, RedirectTo, FullBorderRadius }) => {
	const navigate = useNavigate();
	const ConfirmationFileHandler = () => {
		if (RedirectTo === "FillDescription") AddSelectedFile(files, addDocsToState);
		navigate(`../${RedirectTo}`);
	};

	return (
		<div className={`${style.BtnNextNextWrapper} ${FullBorderRadius && style.FullBorderRadius}`}>
			<IconButton
				type="submit"
				onClick={ConfirmationFileHandler}
				color="success"
				aria-label="upload pdf"
				component="span"
			>
				<NavigateNextIcon sx={{ fontSize: "30px" }} />
			</IconButton>
		</div>
	);
};

export const BtnCancel = ({ wipeFiles }) => {
	return (
		<div className={style.uploadBookPopUpCancel}>
			<IconButton onClick={wipeFiles} color="success" aria-label="upload cancel" component="span">
				<DoDisturbOnIcon sx={{ fontSize: "30px" }} />
			</IconButton>
		</div>
	);
};

export const BtnClose = ({ refetchCatalog, wipeFilesState }) => {
	const navigate = useNavigate();
	const close = () => {
		navigate("/");
		wipeFilesState();
		refetchCatalog();
	};
	return (
		<div className={style.uploadBookPopUpClose}>
			<IconButton
				onClick={close}
				sx={{ color: "#4F4C4C" }}
				aria-label="upload picture"
				component="span"
			>
				<CloseIcon sx={{ fontSize: "30px" }} />
			</IconButton>
		</div>
	);
};

export const InfoBtn = ({ setInfo, Info }) => {
	const Toggle = () => {
		if (Info) setInfo(false);
		else setInfo(true);
	};
	return (
		<div className={style.uploadBookPopUpInfo}>
			<IconButton
				onClick={Toggle}
				sx={{ color: "#4F4C4C" }}
				aria-label="upload picture"
				component="span"
			>
				<InfoIcon sx={{ fontSize: "30px" }} />
			</IconButton>
		</div>
	);
};

const handlerDeleteFromState = (FileURL, FileName, deleteDocsFromState, onDeleteDataForm) => {
	URL.revokeObjectURL(FileURL);
	deleteDocsFromState(FileName);
	onDeleteDataForm();
};

const BtnDelete = ({ FileURL, FileName, deleteDocsFromState, onDeleteDataForm }) => {
	return (
		<div className={style.WrapperButtonDelete}>
			<IconButton
				onClick={() =>
					handlerDeleteFromState(FileURL, FileName, deleteDocsFromState, onDeleteDataForm)
				}
				sx={{ with: "50px" }}
			>
				<DeleteIcon />
			</IconButton>
		</div>
	);
};

export const BtnDeleteContainer = ({ FileURL, FileName, onDeleteDataForm }) => {
	const dispatch = useDispatch();

	const deleteDocsFromState = docs => dispatch(deleteDocs(docs));
	return (
		<BtnDelete
			onDeleteDataForm={onDeleteDataForm}
			FileURL={FileURL}
			FileName={FileName}
			deleteDocsFromState={deleteDocsFromState}
		/>
	);
};
