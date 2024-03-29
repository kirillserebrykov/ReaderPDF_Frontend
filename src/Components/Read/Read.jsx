import React, { useState, useEffect } from "react";
import { Page } from "react-pdf";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import { pdfjs } from "react-pdf";
import style from "./DocumentRead.module.css";
import PaginationComponent from "./Pagination/Pagination";
import Skeleton from "@mui/material/Skeleton";
import { useWebworkerBase64ToUnit8Array } from "../../useWebworker";
import CurrentPage from "./CurrentPage/CurrentPage";
import LoadingBigData from "../Loading/LoadingBigData";
import { NavigationPage } from "./PageNavigation/PageNavigation";

const RenderSkeleton = () => {
	return <Skeleton variant="rectangular" width={760} height={999} />;
};

const ReadUI = ({
	resultWorkWorker,
	currentPage,
	onDocumentLoadSuccess,
	handleChangePage,
	totalPages,
}) => {
	return (
		<main className={style.WrapperDocumentPageForRead}>
			<section className={style.WrapperDocument}>
				<Document
					className={style.Document}
					file={resultWorkWorker && { data: resultWorkWorker }}
					renderMode={"none"}
					onLoadSuccess={onDocumentLoadSuccess && onDocumentLoadSuccess}
					options={{
						cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
						cMapPacked: false,
					}}
					loading={<RenderSkeleton />}
				>
					<Page
						wrap={true}
						width={800}
						pageNumber={currentPage}
						renderMode={"canvas"}
						loading={<RenderSkeleton />}
					/>
				</Document>
			</section>

			{totalPages > 1 && (
				<nav>
					{
						<PaginationComponent
							currentPage={currentPage}
							totalPages={totalPages}
							handleChangePage={handleChangePage}
						/>
					}
					<CurrentPage currentPage={currentPage} totalPages={totalPages} />
					<NavigationPage
						direction="right"
						handleChangePage={handleChangePage}
						currentPage={currentPage}
						totalPages={totalPages}
					/>
					<NavigationPage
						direction="left"
						handleChangePage={handleChangePage}
						currentPage={currentPage}
						totalPages={totalPages}
					/>
				</nav>
			)}
		</main>
	);
};

const Read = ({ FileBase64, isLoading }) => {
	const [totalPages, setNumPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const { resultWorkWorker, errorWorker, runWebworker } = useWebworkerBase64ToUnit8Array(
		FileBase64 => FileBase64
	);

	useEffect(() => {
		runWebworker(FileBase64 && FileBase64);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [FileBase64]);

	const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);
	const handleChangePage = (event, value) => setCurrentPage(value);

	return (
		<>
			{errorWorker && <RenderSkeleton />}
			{isLoading || !resultWorkWorker ? (
				<LoadingBigData />
			) : (
				<ReadUI
					resultWorkWorker={resultWorkWorker}
					currentPage={currentPage}
					onDocumentLoadSuccess={onDocumentLoadSuccess}
					handleChangePage={handleChangePage}
					totalPages={totalPages}
				/>
			)}
		</>
	);
};

export default Read;
