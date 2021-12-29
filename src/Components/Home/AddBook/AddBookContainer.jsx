import React from 'react';
import AddBook from './AddBook'
import { addDocs } from '../../../store/uploadDocSlice'
import { useSelector, useDispatch } from 'react-redux'
const Addbookcontainer = () => {
    const dispatch = useDispatch() 
    const addDocsToState = (docs) => dispatch(addDocs(docs))
    return <AddBook addDocsToState={addDocsToState} />
}

export default Addbookcontainer;
