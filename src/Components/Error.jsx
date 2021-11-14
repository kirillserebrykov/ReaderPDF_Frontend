import React, { useState } from 'react'
import style from './error.module.css';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { usePrefetch } from '../store/data-layer-level/getCatalog'

const styleAlert = { position: "fixed", left: "0", bottom: "0" }



const Error = ({ error }) => {
    
    const refetchCatalog = usePrefetch('GetCatalog')
    const [alert, setAlert] = useState(true)

    const RefrechCatalog = () => {
        refetchCatalog()
        setAlert(true)
    }

    return <div className={style.errorWrraper}>
        <span className={style.errorText}>Не удалось загрузить каталог :(</span>
        <Button onClick={RefrechCatalog} variant="outlined"><span className={style.refreshButtonText}>обновить</span></Button>
        {alert ? <Alert sx={styleAlert} variant="outlined" severity="error" onClose={() => setAlert(false)} >{error.status}</Alert> : ""}
    </div>
}

export default Error