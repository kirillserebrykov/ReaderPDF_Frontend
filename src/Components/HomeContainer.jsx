import React from 'react';
import Home from './Home';
import { useGetCatalogQuery } from '../store/data-layer-level/getCatalog'

const HomeContainer = (props) => {
    const { data, error, isLoading } = useGetCatalogQuery()
    
    return <Home isLoading={isLoading}  dataCatalog={data} error={error} />
}

export default HomeContainer