import React from 'react'
import Read from './Read';
import { useGetBookForReadingQuery } from '../store/data-layer-level/getCatalog'
const ReadContainer = () => {
    const filename = window.location.pathname.replace("/Read/", '')
    const { data, error, isLoading } = useGetBookForReadingQuery(filename)
    console.log()
    return <Read  data={data} error={error} isLoading={isLoading} />
}


export default ReadContainer