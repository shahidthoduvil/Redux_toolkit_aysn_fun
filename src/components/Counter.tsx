import { useDispatch,useSelector } from "react-redux"
import { increment,decrement,incrementbyamount,incrementAsync } from "../state/counter/counterSlice"
import { AppDispatch, rootstate } from "../state/store"


const Counter = () => {
    const count=useSelector((state:rootstate)=>state.counter.value)
    const dispatch=useDispatch<AppDispatch>()
  return (
   <>
   <div style={{alignItems:'center',justifyContent:'center',display:'block', margin:'100px',}}>
   <div >{count}</div>
   <button style={{background:"green"}} onClick={()=>dispatch(incrementAsync(10))}>+</button>
   <button style={{background:"red"}} onClick={()=>dispatch(decrement())}>-</button>
   </div>
   </>
  )
}

export default Counter