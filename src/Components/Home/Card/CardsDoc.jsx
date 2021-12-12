import React,{ useState} from 'react';
import { useNavigate } from 'react-router-dom'
import "./Card.css"
import {useSingleAndDoubleClick} from "../../Snippets/doubleClick"
import CheckIcon from '@mui/icons-material/Check';
const CardsDoc = (props) => {
    const navigate = useNavigate();
    const [isSelect, setIsSelect] = useState(false)
    const rederect = () => () => {
        if(isSelect) return
        else  navigate(`/Book/${props.filename}`)
        
    }
    const select = () => () => setIsSelect(true)
    const stopPropagation = (e) => {
        setIsSelect(false)
        e.stopPropagation()
    }
    return <div onClick={useSingleAndDoubleClick(rederect(), select())}  className={`cardsBack${isSelect ? "Active" : ""}`} >
        <div className={`cards${isSelect ? "Active" : ""}`}></div>  
        {isSelect && 
        <div className="Check" onClick={ (e) => stopPropagation(e)}><CheckIcon color="success" style={{ fontSize: 50}}  /></div>}
    </div>
}

export default CardsDoc