import React, { useState } from 'react'
import style from './error.module.css';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import { usePrefetch } from '../../store/data-layer-level/getRequests'
import Fade from '@mui/material/Fade';
const styleAlert = { position: "fixed", left: "0", bottom: "0" }



const Error = ({ error, refreshHandlerName, page="каталог", filename="", isLoading }) => {
    const [alert, setAlert] = useState(true)
    const refreshHandler =  usePrefetch(refreshHandlerName && refreshHandlerName)

    const RefrechCatalog = () => {
        filename ? refreshHandler(filename) : refreshHandler()
        setAlert(true)
        
    }

    return <div className={style.errorWrraper}>
        <span className={style.errorText}>Не удалось загрузить {page} :(</span>
        <LoadingButton loading={isLoading}  onClick={RefrechCatalog} className={style.refreshButton}  variant="outlined">  <span className={style.refreshButtonText}>обновить</span></LoadingButton>
        <Fade  in={alert} timeout={500}>
            <Alert sx={styleAlert} className={style.MuiAlert} variant="outlined" severity="error" onClose={() => setAlert(false)} >{error && error.status}</Alert>
        </Fade>
        
    </div>
}

export default Error