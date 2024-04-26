// import { useEffect } from "react";
// import { useState } from "react";

// function Effect(){
//     const[count ,setcount] = useState(0);
//     useEffect(() => {
//         console.log("processing...");
//         return() =>{
//                 console.log("clear");
//         }
//     })
//     return(
//         <div>
//             <button onClick={() =>setcount(count+1)}>
//                 processing
//             </button>
//         </div>
//     )
// }
// export default Effect;

// import React, { useState, useEffect } from 'react';
// import './styles.css'; // Your CSS file
// import logo from '../src/images/logo192.png'
// const ImageAnimation = () => {
//   const [isAnimated, setIsAnimated] = useState(true);

//   useEffect(() => {
//     // Trigger animation after component mount
//     setIsAnimated(false);
//   }, []);

//   return (
//     <div className={`image-container ${isAnimated ? 'animated' : ''}`}>
//       <img src={logo} alt="Animated Image" />
//     </div>
//   );
// };

// export default ImageAnimation;

// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from './counterSlice'
// import styles from './Counter.module.css'

// export function Counter() {
//   const count = useSelector(selectCount)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div className={styles.row}>
//         <button
//           className={styles.button}
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>
//         <span className={styles.value}>{count}</span>
//         <button
//           className={styles.button}
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>
//       </div>
//       {/* omit additional rendering output here */}
//     </div>
//   )
// } 