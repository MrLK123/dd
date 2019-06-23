import React,{Component} from 'react';



export default class App extends  Component{
constructor(){
    super();
    this.state={
        list:["one","tow","throw","four","five"]
    }
}
handleClick(){
    alert("hello react");
}
 render(){
  return (
     <div>
         <h1 onClick={this.handleClick}>Hello react</h1>
         <ul>
             {this.state.list.map(item=>(
                 <li>{item}</li>
             ))}
         </ul>
     </div>
  )
 }
}

