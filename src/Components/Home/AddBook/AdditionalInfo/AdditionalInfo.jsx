import React, { useMemo } from 'react';
import style from './AdditionalInfo.module.css';
import { CustomTextField } from '../UIComponent/CustomTextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { BtnNext, BtnDeleteContainer } from '../UIComponent/Buttons';
import { useForm } from "react-hook-form";

const outerTheme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
    },
});





const Form = ({ file,  }) => {
    const FileName = Object.keys(file).toString()
    const FileURL = Object.values(file).toString()
    //
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "onTouched", shouldFocusError: false});
    const onSubmit = data => console.log(data, errors);

    const ValidTextField = ({defaultValue, NameTextField, requiredValue, maxLengthValue, multiline=false, maxRows=false}) => {
        return <CustomTextField  
        defaultValue={defaultValue} 
        {...register(NameTextField, {required:requiredValue, maxLength:{value: maxLengthValue , message:`Максимум допустимое кол-во символов ${maxLengthValue}`}  })}   
        label={NameTextField} variant="standard" 
        error={Boolean(errors[NameTextField] && errors[NameTextField].message)} 
        helperText={errors[NameTextField] && errors[NameTextField].message} 
        multiline={multiline} maxRows={maxRows && maxRows } />
        
    }


    
    return <form onBlur={handleSubmit(onSubmit)}>
                <fieldset className={style.InputSet} >
                    <legend className={style.InputSetName} > <span>{FileName}</span>  </legend>
                    <BtnDeleteContainer FileName={FileName} FileURL={FileURL} />
                    <ThemeProvider theme={outerTheme}>
                        <ValidTextField defaultValue={FileName && FileName.replace(".pdf", "")} NameTextField="Name" requiredValue={"This is required"} maxLengthValue="25"  />
                        <ValidTextField NameTextField="Author" requiredValue={"This is required"} maxLengthValue="25"  />
                        <ValidTextField NameTextField="Description"  maxLengthValue="160" multiline maxRows={4} />
                    </ThemeProvider>
                </fieldset>
            </form>
}



const AdditionalInfo = ({ stateAddition }) => {
    
    const FormForFile = useMemo(() => {
      return  stateAddition.map((file, index) => <Form key={index}  file={file}/>)
    }, [stateAddition]);

    return (
        <section >
            <div className={`${style.AdditionalInfoWrap} ${!stateAddition[1] && style.OneFile} `}>
               {FormForFile && FormForFile}
            </div>
            <nav className={style.NavFormWrap}>
                <BtnNext  RedirectTo={"Finish"} FullBorderRadius={true} />
            </nav>
        </section>
    );
}

export default AdditionalInfo;
