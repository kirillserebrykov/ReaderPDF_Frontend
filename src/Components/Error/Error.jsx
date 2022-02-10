import React, { useState } from 'react'
import style from './error.module.css';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
const styleAlert = { position: "fixed", left: "0", bottom: "0" }



const Error = ({ error, page = "каталог", filename = "", isLoading, refetchCatalog }) => {
    const [alert, setAlert] = useState(true)
    const RefetchCatalog = () => {
        refetchCatalog()
        setAlert(true)
    }
    

    return <div className={style.errorWrapper}>
                <span className={style.errorText}>Не удалось загрузить {page} :(</span>
                <LoadingButton loading={isLoading} onClick={RefetchCatalog} className={style.refreshButton} variant="outlined">  <span className={style.refreshButtonText}>обновить</span></LoadingButton>
                <Fade in={alert} timeout={500}>
                    <Alert sx={styleAlert} className={style.MuiAlert} variant="outlined" severity="error" onClose={() => setAlert(false)} >{error && error.status}</Alert>
                </Fade>
            </div>
}

export default Error