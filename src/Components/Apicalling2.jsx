import React, { useEffect, useState } from 'react'

 function Apicalling2() {


const [count,setCount] = useState(0) // when state  change Useeffect runs.. eg  

const [Too,SetTOo] = useState( [] )

useEffect( ()=> {

    let API = ("https://jsonplaceholder.typicode.com/todos")
    
    fetch(API)
    .then((resp) => { return resp.json()})
    .then ( data => { SetTOo (data)} )
    .catch( err => { console.log("error");
    })
    
},[count]           // usestate wont run unless a requestnnis sent , when count is updated -> we are req usestate to run aagain.

//3 cases/conditons of dependency Arr[] --- in up [count] is depentency arr $ counnt isthe state
// [] // empty [] // only run Useeffect once, in [ ] we can have multiple states
// [Too] // inifinte loop , dont write as this
)//deleted arry[], will give loop as same as how many time compon. runs







  return (


    
    <div>

        <button onClick={()=>setCount(count+1)}>COunt : {count}</button>

        {
            Too.map( (item)=> {

                return [
                    <div  key={item.id}>
                        <h1>NAme : {item.id} </h1>
                        <h1>ID 123: {item.title} </h1>
                    </div>
                ]
            })
        }

    </div>
  )
}

export default Apicalling2