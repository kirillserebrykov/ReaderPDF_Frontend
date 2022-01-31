import axios from 'axios';

export const UploadBlobFile = (updatePost, file, DATA_FORM) =>{
    const URL_BLOB =  Object.values(file).toString()
    const FILE_NAME = Object.keys(file).toString()
    const RES = []
   return axios({
        method: 'get',  
        url: URL_BLOB, 
        responseType: 'blob'
    }).then( async(res) => {
            const formDataPDfFile = new FormData();
            formDataPDfFile.append("file", res.data, FILE_NAME)
            await updatePost({formDataPDfFile, ...DATA_FORM}).then(res => {
                console.log(res)
                 RES.push(res)
            } )
            return RES
    } )
    
}