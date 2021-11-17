import React from 'react'
import Book from './Book';
import { useGetBookInfoQuery } from '../store/data-layer-level/getCatalog'
const BookContainer = () => {
    const filename = window.location.pathname.replace("/Book/", '')
    const { data, error, isLoading } = useGetBookInfoQuery(filename)
    const InfoBook = data ? data[0] : "isFeathing"
    
    return <Book InfoBook = {InfoBook} />
}


export default BookContainer