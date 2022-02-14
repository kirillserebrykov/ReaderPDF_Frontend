import React from 'react';
import Collapse from "@mui/material/Collapse";
import UploadFileZone from "../UIComponent/UploadFileZone";
import { BtnNext, BtnCancel } from "../UIComponent/Buttons";
import style from "../AddFile.module.css";
import SelectDocs from './SelectDocs'




const FileDrop = ({ addDocsToState, wipeFiles, isfiles, files, setFile }) => {

	return (
		<>
			<span className={style.uploadFilePopUpTitle}>
				{!isfiles ? "Выбрать Документы" : "Выбранные Документы"}
			</span>
			<Collapse sx={{ width: "100%" }} in={Boolean(!isfiles)}>
				{<UploadFileZone setFile={setFile} />}
			</Collapse>
			<Collapse in={Boolean(isfiles)}>
				{
					<div className={style.filesNameWrap}>
						<SelectDocs files={files} />
					</div>
				}
			</Collapse>
			<Collapse orientation="horizontal" in={Boolean(isfiles)}>
				{isfiles && (
					<nav className={style.navWrapper}>
						<BtnNext
							files={files}
							addDocsToState={addDocsToState}
							FullBorderRadius={false}
							RedirectTo={"FillDescription"}
						/>
						<BtnCancel wipeFiles={wipeFiles} />
					</nav>
				)}
			</Collapse>
		</>
	);
};

export default FileDrop