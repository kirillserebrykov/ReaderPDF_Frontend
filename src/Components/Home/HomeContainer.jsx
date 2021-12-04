import React from 'react';
import Home from './Home';
import { useGetCatalogQuery } from '../../store/data-layer-level/getRequests'

const HomeContainer = () => {
    const { data, error, isLoading } = useGetCatalogQuery()
    const refreshHandlerName = "GetCatalog"
    
    return <Home isLoading={isLoading} refreshHandlerName={refreshHandlerName}  dataCatalog={data && data} error={error} />
}

export default HomeContainer