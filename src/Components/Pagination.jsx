import React, {useState } from 'react'
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Pagination from '@mui/material/Pagination';
import style from './DocumentRead.module.css';
const PaginationComponent = ({ currentPage, handleChangePage, totalPages }) => {

    const [PaginationVisibility, setPaginationVisibility] = useState(true)
    const Set_Pagination_Invisibility  = () => setPaginationVisibility(false)
    const Set_Pagination_Visibility = () => setPaginationVisibility(true)

    return <>
                <div className={PaginationVisibility ? style.wrraperPagination : style.wrraperPaginationHide}>
                    <Pagination count={totalPages} sx={{"&&" : {flexWrap: "nowrap"}}}  page={currentPage} className={style.pagination} onChange={handleChangePage} />
                    <IconButton sx={{ padding: 0, color: "rgb(33,33,33)", paddingRight: "25px" }} onClick={() => { Set_Pagination_Invisibility() }} aria-label="upload picture" component="span">
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </div>
                <IconButton className={PaginationVisibility ? style.paginationUnVisibleButton : style.paginationVisibleButton} sx={{ padding: 0, color: "rgb(33,33,33)", transform: "rotate(180deg)" }} onClick={() => { Set_Pagination_Visibility() }} aria-label="upload picture" component="span">
                    <KeyboardArrowDownIcon />
                </IconButton>
            </>

}

export default PaginationComponent