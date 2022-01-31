import React, { useEffect }from 'react';
import AddBook from './AddBook'
import { addDocs } from '../../../store/uploadDocSlice'
import { useUploadFileMutation } from '../../../store/data-layer-level/postRequests'
import { useSelector, useDispatch } from 'react-redux'
const AddBookContainer = ({refetchCatalog}) => {
    const dispatch = useDispatch() 
    const addDocsToState = (docs) => dispatch(addDocs(docs))
    const stateAddition = useSelector((state) => state.uploadDocSlice.DocsToUpload)
    const [updatePost, result]  = useUploadFileMutation()
    
    
    
    return <AddBook addDocsToState={addDocsToState} refetchCatalog={refetchCatalog} updatePost={updatePost} result={result}  stateAddition={stateAddition} />
}

export default AddBookContainer;
