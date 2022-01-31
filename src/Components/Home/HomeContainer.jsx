import React from 'react';
import Home from './Home';
import { useGetCatalogQuery } from '../../store/data-layer-level/getRequests'
import { useSelector, useDispatch } from 'react-redux'
import { add, deleteSelect } from '../../store/selectSlice'
const HomeContainer = () => {
    const { data, error, isLoading, refetch  } = useGetCatalogQuery()
    const refreshHandlerName = "GetCatalog"
    const stateSelectedDocs = useSelector((state) => state.selectState.selectDoc)
    const dispatch = useDispatch() 
    const addSelect = (doc) => dispatch(add(doc))
    const deleteSelectDoc = (nameDoc) => dispatch(deleteSelect(nameDoc))
    console.log(stateSelectedDocs)
    return <Home isLoading={isLoading} addSelect={addSelect} stateSelectedDocs={stateSelectedDocs}   deleteSelectDoc={deleteSelectDoc} refetchCatalog={refetch}  refreshHandlerName={refreshHandlerName}  dataCatalog={data && data} error={error} />
}

export default HomeContainer