// import React, {Component} from "react";

// class Counter extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count : 0
//         }
//     }
// // {} kurung kurawal => menyimpan object
// // [] kurung siku => menyimpan array 
//     increment = () => {
//         this.setState({count:this.state.count + 1});
//     }

//     render() {
//         return(
//             <div>
//                 <h1>Count : {this.state.count}</h1>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         )
//     }
// }

// export default Counter;
// // contoh state di class component
// ================= //
// contoh state hook (useState) di dalam arrow function
import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0);
  return (
    <div>
      <h1>Perhitungan : {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  )
}

export default Counter;

