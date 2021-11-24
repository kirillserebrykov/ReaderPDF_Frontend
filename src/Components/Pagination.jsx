import React, {useRef} from 'react'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Pagination from '@mui/material/Pagination';
import style from './DocumentRead.module.css';
const PaginationComponent = ({ pageNumber, handleChangePage, numPages, isPaginationVisible, setIsPaginationVisible }) => {

    const PaginationVisible = useRef(null);
    const PaginationVisibleClick = () => {
        PaginationVisible.current.className = style.wrraperPaginationHide
    }
    const PaginationVisibleClickf = () => {
        PaginationVisible.current.className = style.wrraperPagination
    }

    return <>
            <div ref={PaginationVisible} className={style.wrraperPagination}>
                <Pagination count={numPages} page={pageNumber} onChange={handleChangePage} />
                <IconButton sx={{ padding: 0, color: "rgb(33,33,33)" }} onClick={() => {PaginationVisibleClick()}} aria-label="upload picture" component="span">
                    <KeyboardArrowDownIcon />
                </IconButton>
            </div>
            <IconButton sx={{ padding: 0, color: "rgb(33,33,33)" }} onClick={() => {PaginationVisibleClickf()}} aria-label="upload picture" component="span">
                    <KeyboardArrowDownIcon />
                </IconButton>
    </>

}

export default PaginationComponent