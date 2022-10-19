
import { createSlice } from "@reduxjs/toolkit"

const log = createSlice({
    name : "log",
    initialState : [],
    reducers:{
        add(state , action){
            state.push(action.payload);          
        },
        goto(){
            return state.filter((item)=>item.id !==action.payload)
        }
    }

})

export const { add } = log.reducer
export default log.reducer