import { createAsyncThunk, createSlice ,PayloadAction} from "@reduxjs/toolkit";

interface CounterState{
    value:number;

}
const initialState:CounterState={
    value:0

}

const counterSlice=createSlice({
 name:"counter",
 initialState,
 reducers:{
    increment:(state)=>{
        state.value+=1;
    },
    decrement:(state)=>{
        state.value-=1
    },
    incrementbyamount:(state,action:PayloadAction<number>)=>{
        state.value +=action.payload
    },
    
 },
 extraReducers:(builder)=>{
    builder.addCase(
        incrementAsync.pending,()=>{
         console.log('pending..... ')
        }).addCase(
            incrementAsync.fulfilled,(state,action:PayloadAction<number>)=>{
              state.value +=action.payload
        },
    ).addCase(incrementAsync.rejected, (state, action) => {
        console.error('Increment failed:', action.error);
 });
}
})

export const incrementAsync=createAsyncThunk(
    'counter/incrementasync',
    async(amount:number)=>{
        await new Promise((resolve)=>setTimeout(resolve,1000))
        return amount
    }
)
export const {increment,decrement,incrementbyamount}=counterSlice.actions
export default counterSlice.reducer;
