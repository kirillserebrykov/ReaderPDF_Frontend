import React, {useRef, useState} from 'react'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Pagination from '@mui/material/Pagination';
import style from './DocumentRead.module.css';
const PaginationComponent = ({ pageNumber, handleChangePage, numPages, isPaginationVisible, setIsPaginationVisible }) => {
    const [pagvis, setPagvis] = useState(true)
    const PaginationVisible = useRef(null);


    const PaginationVisibleClick = () => {
        PaginationVisible.current.className = style.wrraperPaginationHide
        setPagvis(false)
    }
    const PaginationVisibleClickf = () => {
        PaginationVisible.current.className = style.wrraperPagination

    }

    console.log(pagvis)
    return <>
            <div ref={PaginationVisible} className={style.wrraperPagination}>
                <Pagination count={numPages} ref={Pagination} page={pageNumber} className={style.pagination} onChange={handleChangePage} />
                <IconButton sx={{ padding: 0, color: "rgb(33,33,33)" }} onClick={() => {PaginationVisibleClick()}} aria-label="upload picture" component="span">
                    <KeyboardArrowDownIcon />
                </IconButton>
            </div>
            <IconButton className={style.paginationVisibleButton} sx={{  padding: 0, color: "rgb(33,33,33)", transform: "rotate(180deg)" }} onClick={() => {PaginationVisibleClickf()}} aria-label="upload picture" component="span">
                    <KeyboardArrowDownIcon />
                </IconButton>
    </>

}

export default PaginationComponent