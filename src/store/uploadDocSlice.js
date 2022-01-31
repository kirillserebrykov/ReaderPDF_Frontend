import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    DocsToUpload: [],
}

export const selectSlice = createSlice({
    name: 'uploadDoc',
    initialState,
    reducers: {
        addDocs: (state, actions) => {
            state.DocsToUpload.filter((e => { 
                const FileNameInState = Object.keys(e).toString() 
                const FileNameInActionsPayload = Object.keys(actions.payload).toString()
                const Duplicate = FileNameInState === FileNameInActionsPayload
               
                if(Duplicate)  return 
                else state.DocsToUpload.push(actions.payload)
            } ))

            state.DocsToUpload.length === 0 && state.DocsToUpload.push(actions.payload)
            
        },
        deleteDocs: (state, actions) => {
            state.DocsToUpload.map((docs, i) => {
                if(actions.payload === Object.keys(docs).toString()) return state.DocsToUpload.splice(i, 1)
                else return state.selectDoc
            })   
        }
    },
})
export const { addDocs, deleteDocs } = selectSlice.actions

export default selectSlice.reducer