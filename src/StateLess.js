import React,{useState} from 'react';
//useState----->Hook
//states  --->initialization -->this.state
//Manipulating the state --->this.setState()


let StateLess=()=>{
    const [count,ChangeCount]=useState(0);
    return(
        <div style={{textAlign:"center"}}>
            <h2>{count}</h2>
            <button onClick={()=>(ChangeCount(count+1))}>Increase</button>
            <button onClick={()=>(ChangeCount(count-1))}>Decrease</button>
        </div>

    )
        

    
}
export default StateLess;