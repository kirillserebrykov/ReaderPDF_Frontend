import React, { useState }from 'react'
import style from './CurrentPage.module.css';

const CurrentPage = ({currentPage, totalPages}) => {
    const [hoverInfoPage, setHoverInfoPage] = useState(false)
    console.log(hoverInfoPage   )
    return <div onMouseEnter={ () => setHoverInfoPage(true)} onMouseLeave={ () => setHoverInfoPage(false)} className={style.currentPageWraper}>
                <span className={style.currentPageText}>{currentPage} стр.</span>
                <span className={hoverInfoPage ?   style.totalPageText : style.totalPageTextHide}>{totalPages} стр.</span>
        </div>
}

export default CurrentPage