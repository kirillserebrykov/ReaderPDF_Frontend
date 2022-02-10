import React from 'react';
import Home from './Home';
import { useGetCatalogQuery } from '../../store/data-layer-level/getRequests'
import { useSelector, useDispatch } from 'react-redux'
import { add, deleteSelect, wipeState } from '../../store/selectSlice'
const HomeContainer = () => {
    const { data, error, isLoading, refetch  } = useGetCatalogQuery()
    const refreshHandlerName = "GetCatalog"
    const stateSelectedDocs = useSelector((state) => state.selectState.selectDoc)
    const dispatch = useDispatch() 
    const addSelect = (doc) => dispatch(add(doc))
    const wipe = () => dispatch(wipeState())
    const deleteSelectDoc = (nameDoc) => dispatch(deleteSelect(nameDoc))
    
    return <Home    isLoading={isLoading} addSelect={addSelect} 
                    wipeState={wipe} stateSelectedDocs={stateSelectedDocs}   
                    deleteSelectDoc={deleteSelectDoc} refetchCatalog={refetch}  
                    refreshHandlerName={refreshHandlerName}  dataCatalog={data && data} 
                    error={error} 
            />
}

export default HomeContainer