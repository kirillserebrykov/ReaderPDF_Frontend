import React, { useEffect, useState } from "react";
import { UploadBlobFile } from "./UploadBlobFile";
import CircularProgress from "@mui/material/CircularProgress";
import style from "./Finish.module.css";

const Finish = ({ stateAddition, updatePost, stateForms }) => {
	const [responseUploadFile, setResponseUploadFile] = useState([]);
	
	useEffect(() => {
		stateAddition &&
			stateAddition.map(async (file, i) => {
				const DATA_FORM = stateForms.length !== 0 && Object.values(stateForms[i])[0];
				let result = await UploadBlobFile(updatePost, file, DATA_FORM);
				setResponseUploadFile(currentState => [...currentState, result]);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [stateAddition]);



	let resultUpload = responseUploadFile.map((el, index) => {
		return (
			<div key={index} className={style.finishInfo}>
				<h1 className={el[0].data.statusCode === "1" ? style.good : style.error}>
					{el[0].data.fileName}
				</h1>
			</div>
		);
	});

	return (
		<section className={style.finishWrapper}>
			<h1 className={style.FinishTitle}>ЗАГРУЖЕНЫЕ ДОКУМЕНТЫ</h1>
			{responseUploadFile[0] ? resultUpload : <CircularProgress size={70} color="success" />}
		</section>
	);
};

export default Finish;
