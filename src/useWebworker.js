import { useState } from 'react'
const workerHandler = (fn) => {
  onmessage = (event) => {
    postMessage(fn(event.data))
    
  }}


  const Base64toUnit8Array = (file) =>{
    return Buffer.from(file, "base64")
  }
  const getFileBase64 = (event) => {
    return event.data[0]
  }

  export const useWebworkerBase64ToUnit8Array = (fn) => {
    const [resultWorkWorker, setResultWorkWorker] = useState(null)
    const [errorWorker, setErrorWorker] = useState(null)
    
    const runWebworker = (value) => {
      const worker = new Worker(
        URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`]))
        )
      
      worker.onmessage = (event) => {
        const file = event.data && getFileBase64(event)
        const buffer = file && Base64toUnit8Array(file)
        setResultWorkWorker(buffer && buffer)
        worker.terminate()
      }
      worker.onerror = (error) => {
        setErrorWorker(error.message)
        worker.terminate()
        
      }
      worker.postMessage(value)
    }
  
    return {
      
      resultWorkWorker,
      errorWorker,
      runWebworker,
    }
  }