// import React from "react";
//
// class Timer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {seconds: 0}
//     }
//
//     tick() {
//         this.setState(state => ({
//             seconds: state.seconds + 1
//         }))
//     }
//
//     componentDidMount() {
//         this.interval = setInterval(() => this.tick(), 1000);
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.interval)
//     }
//
//     render() {
//         return (
//             <div>
//                 Seconds: {this.state.seconds}
//             </div>
//         )
//     }
// }
//
// export default Timer;
//
//
import React, { useState } from 'react';

function App() {
  const [color1, setColor1] = useState('red');
  const [color2, setColor2] = useState('blue');

  const swapColors = () => {
    setColor1(color2);
    setColor2(color1);
  };

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color1,
          display: 'inline-block',
          marginRight: '10px',
            alignItems: 'center',
        }}
        onClick={swapColors}
      ></div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: color2,
          display: 'inline-block',
            alignItems: 'center',
        }}
        onClick={swapColors}
      ></div>
    </div>
  );
}

export default App;

