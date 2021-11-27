import React, { useState, useEffect, } from 'react'
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import style from './DocumentRead.module.css';
import PaginationComponent from './Pagination';
import Skeleton from '@mui/material/Skeleton';
import { useWebworkerBase64ToUnit8Array } from '../useWebworker'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const renderSkeleton = () => {
  return <Skeleton variant="rectangular" width={434} height={636} />

}

const ReadMarkUp = ({resultWorkWorker, pageNumber, onDocumentLoadSuccess, handleChangePage, numPages}) => {
  
  //const [isPaginationVisible, setIsPaginationVisible] = useState(null);
  
  return <section  className={style.WrraperdocumentPageForRead}>
    <div className={style.Wrraperdocument}>
      <Document className={style.Document}
        file={resultWorkWorker && { data: resultWorkWorker }}
        renderMode={"none"}
        onLoadSuccess= { onDocumentLoadSuccess &&  onDocumentLoadSuccess }
        options={{
          cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: false,
        }}
        loading={renderSkeleton}
      >
        <Page pageNumber={pageNumber} renderMode={"canvas"} loading={renderSkeleton} />
      </Document>
    </div>

    {numPages > 1 &&  <PaginationComponent pageNumber={pageNumber} numPages={numPages} handleChangePage={handleChangePage}  /> 
     }
     
     
  </section>
  
}







const Read = ({ FileBase64, isLoading }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  
  const {resultWorkWorker, errorWorker, runWebworker } = useWebworkerBase64ToUnit8Array((FileBase64) => FileBase64)
  
  useEffect(() => {
    runWebworker(FileBase64 && FileBase64)
  },[FileBase64]);

  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const handleChangePage = (event, value) => {
    setPageNumber(value)
  }

  return <section>
          {errorWorker && renderSkeleton}
          {isLoading || !resultWorkWorker ?
            renderSkeleton :
            <ReadMarkUp resultWorkWorker ={resultWorkWorker}  pageNumber={pageNumber} onDocumentLoadSuccess={onDocumentLoadSuccess} handleChangePage={handleChangePage} numPages={numPages} />
          }
    </section>

}


export default Read