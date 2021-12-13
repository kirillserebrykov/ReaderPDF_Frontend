import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectDoc: [],
}

export const selectSlice = createSlice({
    name: 'Select',
    initialState,
    reducers: {
        add: (state, actions) => {
            state.selectDoc.push(actions.payload)   
        },
        deleteSelect: (state, actions) => {
            state.selectDoc.map((docs, i) => {
                if(actions.payload === docs) return state.selectDoc.splice(i, 1)
                else return state.selectDoc
            })   
        }
    },
})


export const { add, deleteSelect } = selectSlice.actions

export default selectSlice.reducer