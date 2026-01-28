import React, { useEffect, useState } from 'react'

function Apicalling() {


  const [todo,setTodo] = useState([])// why []array? - whatever geting in the consle is an arry-so initial nature should also b an arrym or els ewill be looping on it, cant loop on string , var , noting , other than aary

   useEffect ( ()=>{

     const API="https://jsonplaceholder.typicode.com/todos";
   
     fetch(API)  //returns promise 
   
     .then( (resp)=>{ return resp.json()})//also rtrns promise , so .then(next)
     
     .then( (data)=> { console.log(data ,"data");//.then accepts cb fn
     
      setTodo(data) //dont write withou Useeffect  this cause in loop and dead the code 
      
      // .then((data) => {  setTodo (data) ===========shortcut
      // }  )
    
    } )
   
     .catch( (err)=> {console.log(err , " catch") } )


    
   },[] )  


   

  return (
    <div>
      {
        todo.map( (item)=>{ 
          
          return [

          <div key={item.id}>

            <h2> ID : {item.id} </h2>
            <h2> TITLE : {item.title} </h2>
          </div>
        ] } )
      }
    </div>
  )
}

export default Apicalling




//Flow of the code is useState ->return -> Useeffect  -> setTodo (changing state) -> again rerender -> usestate -> return , ends

// useState (initial [])
//    ↓
// return (first render)
//    ↓
// useEffect (API call)
//    ↓
// setTodo (state update)
//    ↓
// re-render
//    ↓
// useState (updated value)
//    ↓
// return
//    ↓
// STOP (useEffect doesn’t run again)