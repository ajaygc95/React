import React from 'react'
import App from '../App'

// function Greet(){

//     return <h1> Hello Fucking Lord Ajay </h1>
// }

const Greet = (props ) =>{
console.log(props)
return <h1>Hello {props.name} {props.second}</h1>
} 

export default Greet;