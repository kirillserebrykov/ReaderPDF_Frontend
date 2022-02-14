import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import style from "./PageNavigation.module.css";

export const NavigationPage = ({ direction, handleChangePage, currentPage, totalPages }) => {
	const checkDirection = () => {
		if (direction === "left") return style.wrraperButtonBackPage;
		if (direction === "right") return style.wrraperButtonNextPage;
	};
	const checkHendler = () => {
		if (direction === "right" && currentPage + 1 <= totalPages)
			return handleChangePage(null, currentPage + 1);
		if (direction === "left" && handleChangePage && currentPage > 1)
			return handleChangePage(null, currentPage - 1);
	};

	return (
		<div onClick={checkHendler} className={checkDirection()}>
			<IconButton aria-label="delete">
				<ArrowBackIosNewIcon />
			</IconButton>
		</div>
	);
};
