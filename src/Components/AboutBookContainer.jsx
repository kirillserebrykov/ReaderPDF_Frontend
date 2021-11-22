import React from 'react'
import AboutBook from './AboutBook';
import { useGetBookInfoQuery } from '../store/data-layer-level/getRequests'

const AboutBookContainer = () => {
    const filename = window.location.pathname.replace("/Book/", '')
    const { data, error, isLoading } = useGetBookInfoQuery(filename)
    const InfoBook = data ? data[0] : "isFeathing"
    const refreshHandlerName = "GetBookInfo"
    return <AboutBook InfoBook = {InfoBook}  error={error} filename={filename} refreshHandlerName={refreshHandlerName}  isLoading={isLoading} />
}


export default AboutBookContainer