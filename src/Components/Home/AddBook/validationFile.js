const FileValid = (status, file, errMess) => {
    return {
        status: status,
        file: file,
        errMess: errMess
    }
}


export const validationFile = (file) => {
    const validExpType = file.type === "application/pdf" 
    const validExpMaxSymbols = file.type === "application/pdf" 
    if(validExpType) {
        if (validExpMaxSymbols)  return FileValid("ok", file, null)
        else return FileValid("error", null, "слишком большое имя файла") 
    } else return FileValid("error", null, "не валиден расширения файла") 
}
