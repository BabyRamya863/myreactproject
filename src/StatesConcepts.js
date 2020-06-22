import React,{Component} from 'react';

class StatesConcept extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    increase=()=>{
        this.setState({
            count:this.state.count+1

        })
    }
    decrease=()=>{
        this.setState({
            count:this.state.count-1

        })
    }
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h2 >{this.state.count}</h2>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>decrease</button>
               
            </div>
        )
    }
}
export default StatesConcept;