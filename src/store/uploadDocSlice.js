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
        }
    },
})
export const { addDocs } = selectSlice.actions

export default selectSlice.reducer