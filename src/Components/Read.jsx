import React, { useState } from 'react'
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import style from './DocumentRead.module.css';
import Pagination from '@mui/material/Pagination';
import Skeleton from '@mui/material/Skeleton';
import worker from '../worker';

function add2NumbersUsingWebWorker() {
  const myWorker = new Worker(worker);  

  myWorker.postMessage([42, 7]);
  console.log('Message posted to worker');

  myWorker.onmessage = function(e) {
      console.log( e.data);
  }
}

add2NumbersUsingWebWorker();

const renderSkeleton = () => {
  return <Skeleton variant="rectangular" width={434} height={636} />
}

const ReadMarkUp = (myBuffer,pageNumber,onDocumentLoadSuccess,handleChange,numPages) => {

  return <section className={style.WrraperdocumentPageForRead} >
            <div className={style.Wrraperdocument}>
                <Document className={style.Document}
                    file={myBuffer && { data: myBuffer }}
                    renderMode={"none"}
                    onLoadSuccess={onDocumentLoadSuccess}
                    options={{
                      cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                      cMapPacked: false,
                    }}
                    loading={renderSkeleton}
                  >
                    <Page pageNumber={pageNumber} renderMode={"canvas"} loading={renderSkeleton} />
                </Document>
            </div>
            <Pagination sx={{ position: "fixed", left: "50%", bottom: "10px", transform: "translate(-50%,0%)" }} count={numPages} page={pageNumber} onChange={handleChange} />
  </section>
}









const Read = ({FileBase64, isLoading}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoadingFile, setisLoadingFile] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const handleChange = (event, value) => {
    setPageNumber(value)
  }
  
  
  //const FileUnit8Array =  FileBase64 && Buffer.from(FileBase64[0], 'base64');
  const FileUnit8ArrayF =  () =>{
    return ""  //FileBase64 && Buffer.from(FileBase64[0], 'base64')
  }

    return <>
              {isLoading  ?
                          renderSkeleton :
                          ReadMarkUp(FileUnit8ArrayF(), pageNumber, onDocumentLoadSuccess, handleChange, numPages)
              }
          </>
    
}


export default Read