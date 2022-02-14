import React from "react";
import TumbleweedImg from "./Tumbleweed.png";
import style from "./Tumbleweed.module.css";

const Tumbleweed = () => {
	return (
		<div className={style.tumbleweedWrap}>
			<img with={"100px"} height={"100px"} src={TumbleweedImg} alt="" />
		</div>
	);
};

export default Tumbleweed;
