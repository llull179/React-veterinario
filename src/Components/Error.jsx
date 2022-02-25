import {useState,useEffect} from 'react'

const Error = (props) => {
  return (
    <div className= 'uppercase font-bold mb-3 rounded-md text-center p-2 bg-red-800 text-white p'> 
        <p>{props.mensaje}</p>
    </div>
  
  )
}

export default Error
