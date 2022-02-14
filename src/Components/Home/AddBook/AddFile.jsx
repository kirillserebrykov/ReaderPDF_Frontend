import React, { useState, useEffect } from "react";
import style from "./AddFile.module.css";
import Process from './FileDrop/Process';
import FileDrop from './FileDrop/FileDrop';
import { useLocation } from "react-router-dom";
import { BtnClose, InfoBtn } from "./UIComponent/Buttons";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import Finish from "./Finish/Finish";
import { useNavigate } from "react-router-dom";









const InfoUpload = ({ isfiles, StatusUpload, setInfo, Info, refetchCatalog, wipeFilesState }) => {
	return (
		<>
			<BtnClose refetchCatalog={refetchCatalog} wipeFilesState={wipeFilesState} />
			<InfoBtn setInfo={setInfo} Info={Info} />
			<Process isfiles={isfiles} StatusUpload={StatusUpload} />
		</>
	);
};


const AddFile = ({
	addDocsToState,
	stateAddition,
	updatePost,
	result,
	refetchCatalog,
	wipeFilesState,
}) => {
	const [files, setFile] = useState([]);
	const [Info, setInfo] = useState(false);
	const [stateForms, setStateForms] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();
	const wipeFiles = () => setFile([]);
	const isfiles = files[0];
	const StatusUpload = location.pathname.replace("/Home", "");

	useEffect(() => {
		if ((StatusUpload === "/FillDescription" || "/Finish") && !stateAddition[0])
			navigate("../UploadFile");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [stateAddition]);

	return (
		<>
			<section className={style.uploadFilePopUp}>
				<div className={`${style.Info} ${Info ? style.visibility : style.hidden} `}>
					<p className={style.InfoText}>
						Чтобы загрузить файл, перетащите или выберете нужный файл. Если файл помечен
						<mark className={style.fileOk}>зелёным</mark> цветом тогда всё ok, но если файл помечен
						<mark className={style.fileErr}>красным</mark> тогда он не будет принят
					</p>
				</div>
				<InfoUpload
					wipeFilesState={wipeFilesState}
					isfiles={isfiles}
					refetchCatalog={refetchCatalog}
					StatusUpload={StatusUpload}
					setInfo={setInfo}
					Info={Info}
				/>
				{StatusUpload === "/UploadFile" && (
					<FileDrop
						addDocsToState={addDocsToState}
						isfiles={isfiles}
						wipeFiles={wipeFiles}
						files={files}
						setFile={setFile}
					/>
				)}
				{StatusUpload === "/FillDescription" && (
					<AdditionalInfo
						stateAddition={stateAddition}
						stateForms={stateForms}
						setStateForms={setStateForms}
					/>
				)}
				{StatusUpload === "/Finish" && (
					<Finish
						updatePost={updatePost}
						result={result}
						stateAddition={stateAddition}
						stateForms={stateForms}
					/>
				)}
			</section>
		</>
	);
};

export default AddFile;
