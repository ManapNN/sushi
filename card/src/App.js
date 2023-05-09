// // import logo from './logo.svg';
// import './App.css';
// import { Car } from './components';
// import React from 'react';

// export const App =()=> {
//   return (
    
//     <div className="App">
//       <Car/>
//     </div>
//   );
// }
import './App.css';
import { Car } from './components';
import {Data } from "./data"

export const App=()=> {
  return (
    <div className="App">
     {
      Data.map((el ,id)=>{
     return <Car props={el} key={id} />
      })
     }

    </div>
  );
}

// export default App;

