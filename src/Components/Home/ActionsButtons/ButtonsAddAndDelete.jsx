import React,{useState} from 'react'
import style from "./ButtonsAddAndDelete.module.css"
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import {useNavigate} from 'react-router-dom';

export const ButtonDelete = ({stateSelectedDocs}) => {
    const [alert, setAlert] = useState(false)
    
    const logicAddDocs = () => {
        if(!stateSelectedDocs[0] ) setAlert(true)
    }

    return <div className={style.ButtonsBackground}>
        <IconButton onClick={logicAddDocs} className={style.ButtonAdd} sx={{ with: "80px", height: "60px" }}  >
            <DeleteIcon fontSize="large" />
        </IconButton>
          <Fade  in={alert} timeout={500}>
            <Alert onClose={() => setAlert(false)} sx={{position:"fixed", right:"10px"}} severity="info">Пожалуйста, выберете документы который хотите удалить</Alert>
        </Fade> 
        </div>
}

export const ButtonAdd = () => {
    const navigate = useNavigate();
    const AddDoc = () => navigate('/Home/UploadFile')
    
    return <div className={style.ButtonsBackground}>
        <IconButton onClick={AddDoc} className={style.ButtonAdd} color="success" sx={{ with: "80px", height: "60px" }}  >
            <AddIcon fontSize="large" color="success" />
        </IconButton>
       
    </div>
}