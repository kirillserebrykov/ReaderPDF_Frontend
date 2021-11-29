import React, { useState, useEffect, } from 'react'
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import style from './DocumentRead.module.css';
import PaginationComponent from './Pagination';
import Skeleton from '@mui/material/Skeleton';
import { useWebworkerBase64ToUnit8Array } from '../useWebworker'
const RenderSkeleton = () => {
  return <Skeleton variant="rectangular" width={434} height={636} />

}

const ReadUI = ({ resultWorkWorker, currentPage, onDocumentLoadSuccess, handleChangePage, totalPages }) => {



  return <main className={style.WrraperdocumentPageForRead}>
    <section className={style.Wrraperdocument}>
      <Document className={style.Document}
        file={resultWorkWorker && { data: resultWorkWorker }}
        renderMode={"none"}
        onLoadSuccess={onDocumentLoadSuccess && onDocumentLoadSuccess}
        options={{
          cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: false,
        }}
        loading={<RenderSkeleton /> }
      >
        <Page pageNumber={currentPage} renderMode={"canvas"} loading={<RenderSkeleton /> } />
      </Document>
    </section>

    {totalPages > 0 && 
    <nav>
        <PaginationComponent currentPage={currentPage} totalPages={totalPages} handleChangePage={handleChangePage} />
        
    </nav>
    }


  </main>

}







const Read = ({ FileBase64, isLoading }) => {
  const [totalPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { resultWorkWorker, errorWorker, runWebworker } = useWebworkerBase64ToUnit8Array((FileBase64) => FileBase64)

  useEffect(() => { runWebworker(FileBase64 && FileBase64) }, [FileBase64]);

  const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages)
  const handleChangePage = (event, value) => setCurrentPage(value)

  return <>
    {errorWorker && <RenderSkeleton /> }
    {isLoading || !resultWorkWorker ?
      <RenderSkeleton /> :
      <ReadUI resultWorkWorker={resultWorkWorker} currentPage={currentPage} onDocumentLoadSuccess={onDocumentLoadSuccess} handleChangePage={handleChangePage} totalPages={totalPages} />
    }
  </>

}


export default Read