import React from 'react'
import Book from './Book';
import { useGetCatalogQuery } from '../store/data-layer-level/getCatalog'
const BookContainer = () => {
    const { data, error, isLoading } = useGetCatalogQuery()
    const InfoBook = data ? data[0] : "isFeathing"
    
    return <Book InfoBook = {InfoBook} />
}


export default BookContainer