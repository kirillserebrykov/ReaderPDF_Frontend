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



const DeleteDuplicateOrFile = (state, FileName) => {
    // eslint-disable-next-line 
    state && state.map((fileForm, index) => {
        if (Object.keys(fileForm).toString() === FileName) {
            return state.splice(index, 1)
        }
    })
}


const Form = ({ file, setStateForms }) => {
    const FileName = Object.keys(file).toString()
    const FileURL = Object.values(file).toString()
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched", shouldFocusError: true });

    const onSubmit = dataForm => setStateForms(currentState => {
        DeleteDuplicateOrFile(currentState, FileName)
        return [...currentState, { [FileName]: dataForm }]
    })

    const onDeleteDataForm = () => {
        setStateForms(currentState => {
            DeleteDuplicateOrFile(currentState, FileName)
            return [...currentState]
        })
        reset({ Name: "", Author: "", Description: "" })
    }

    const ValidTextField = ({ defaultValue, NameTextField, requiredValue, maxLengthValue, multiline = false, maxRows = 0 }) => {
        return <CustomTextField
            defaultValue={defaultValue}
            {...register(NameTextField, { required: requiredValue, maxLength: { value: maxLengthValue, message: `Максимум допустимое кол-во символов ${maxLengthValue}` } })}
            label={NameTextField} variant="standard"
            error={Boolean(errors[NameTextField] && errors[NameTextField].message)}
            helperText={errors[NameTextField] && errors[NameTextField].message}
            multiline={multiline} maxRows={maxRows && maxRows} />
    }

    return <>
        <form onBlur={handleSubmit(onSubmit)}>
            <fieldset className={style.InputSet} >
                <legend className={style.InputSetName} > <span>{FileName}</span>  </legend>
                <BtnDeleteContainer onDeleteDataForm={onDeleteDataForm} FileName={FileName} FileURL={FileURL} />
                <ThemeProvider theme={outerTheme}>
                    <ValidTextField defaultValue={FileName && FileName.replace(".pdf", "")} NameTextField="Name" maxLengthValue="25" />
                    <ValidTextField NameTextField="Author" maxLengthValue="25" />
                    <ValidTextField NameTextField="Description" maxLengthValue="160" multiline maxRows={4} />
                </ThemeProvider>
            </fieldset>
        </form>
    </>
}



const AdditionalInfo = ({ stateAddition, stateForms, setStateForms }) => {
    const FormForFile = useMemo(() => {
        return stateAddition.map((file, index) => <Form key={index} stateForms={stateForms} setStateForms={setStateForms} file={file} />) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stateAddition]);

    return (
        <section >
            <div className={`${style.AdditionalInfoWrap} ${!stateAddition[1] && style.OneFile} `}>
                {FormForFile && FormForFile}
            </div>
            <nav className={style.NavFormWrap}>
                <BtnNext RedirectTo={"Finish"} FullBorderRadius={true} />
            </nav>
        </section>
    );
}

export default AdditionalInfo;
