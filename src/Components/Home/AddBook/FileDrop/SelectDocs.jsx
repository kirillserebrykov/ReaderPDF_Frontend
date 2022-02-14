import React from 'react';
import style from "../AddFile.module.css";


const SelectDocs = ({ files }) => {
	return files.map((file, index) => {
		if (file.status === "ok")
			return (
				<span key={index} className={style.filesName}>
					{file.file.name}
				</span>
			);
		else {
			return (
				<span
					key={index}
					style={{ color: "#ca4343" }}
					title={file.errMess}
					className={style.filesName}
				>
					{file.file.name}
				</span>
			);
		}
	});
};
export default SelectDocs