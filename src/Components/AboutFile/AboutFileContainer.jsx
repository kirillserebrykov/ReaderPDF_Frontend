import React from 'react'
import AboutFile from './AboutFile';
import { useGetBookInfoQuery } from '../../store/data-layer-level/getRequests'

const AboutFileContainer = () => {
    const filename = window.location.pathname.replace("/File/", '')
    const { data, error, isLoading } = useGetBookInfoQuery(filename)
    const InfoBook = data ? data[0] : "isFeathing"
    const refreshHandlerName = "GetBookInfo"
    return <AboutFile InfoBook = {InfoBook}  error={error} filename={filename} refreshHandlerName={refreshHandlerName}  isLoading={isLoading} />
}   


export default AboutFileContainer