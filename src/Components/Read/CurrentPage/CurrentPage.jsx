import React from "react";
import style from "./CurrentPage.module.css";

const CurrentPage = ({ currentPage, totalPages }) => {
	return (
		<>
			<div className={style.currentPageWraper}>
				<span className={style.infoPageText}>{currentPage} стр.</span>
			</div>
			<div className={style.totalPageWraper}>
				<span className={style.infoPageText}>{totalPages} стр.</span>
			</div>
		</>
	);
};

export default CurrentPage;
