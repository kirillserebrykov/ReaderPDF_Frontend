import React, { useState } from 'react'
import style from './error.module.css';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { usePrefetch } from '../store/data-layer-level/getRequests'
const styleAlert = { position: "fixed", left: "0", bottom: "0" }



const Error = ({ error, refreshHandlerName, page="каталог", filename="" }) => {
    const [alert, setAlert] = useState(true)
    const refreshHandler =  usePrefetch(refreshHandlerName && refreshHandlerName)
    const RefrechCatalog = () => {
        refreshHandler(filename && filename)
        setAlert(true)
    }

    return <div className={style.errorWrraper}>
        <span className={style.errorText}>Не удалось загрузить каталог :(</span>
        <Button onClick={RefrechCatalog} className={style.refreshButton}  variant="outlined"><span className={style.refreshButtonText}>обновить</span></Button>
        {alert ? <Alert sx={styleAlert} className={style.MuiAlert} variant="outlined" severity="error" onClose={() => setAlert(false)} >{error.status}</Alert> : ""}
    </div>
}

export default Error