import React from 'react';
import AddBook from './AddBook'
import { addDocs, deleteDocs } from '../../../store/uploadDocSlice'
import { useSelector, useDispatch } from 'react-redux'
const AddBookContainer = () => {

    const dispatch = useDispatch() 
    const addDocsToState = (docs) => dispatch(addDocs(docs))
    const stateAddition = useSelector((state) => state.uploadDocSlice.DocsToUpload)
    return <AddBook addDocsToState={addDocsToState} stateAddition={stateAddition} />
}

export default AddBookContainer;
