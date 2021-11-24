import React from 'react'
import Read from './Read';
import { useGetBookForReadingQuery } from '../store/data-layer-level/getRequests'
const ReadContainer = () => {
    const filename = window.location.pathname.replace("/Read/", '')
    const { data, error, isLoading } = useGetBookForReadingQuery(filename)

    return <Read FileBase64={data} error={error} isLoading={isLoading} />
}


export default ReadContainer