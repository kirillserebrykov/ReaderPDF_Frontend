import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    DocsToUpload: [],
}

export const selectSlice = createSlice({
    name: 'uploadDoc',
    initialState,
    reducers: {
        addDocs: (state, actions) => {
            state.DocsToUpload.push(actions.payload)   
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