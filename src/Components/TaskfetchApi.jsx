import { useEffect, useState } from "react"
import axios from "axios";

export default function Taskfetch() {

 const [fromH,toBe] =   useState([])
 

 useEffect( ()=>{

    const Api = "https://jsonplaceholder.typicode.com/todos";

    // //Async fetch

    // async function calling () {
    //     const result = await fetch (Api)
    //     const data = await result.json()
    //     toBe(data)
    //     console.log(data);
        
    // }
    // calling()
    // ========================================   // ========================================   // ========================================

    // Axios with Promise 

    // axios.get(Api)
    // .then( (resp)=> {
    //     // console.log(resp.data);
    //     toBe(resp.data)
    // })
    
    // .catch( (err)=> {console.log(err,"error");
       
        
        
    // })


 // ========================================   // ========================================

    // axios with Async await 

    
    async function calling(){


        const reslut = await axios.get(Api)
        console.log(reslut.data);
        
        toBe(reslut.data)
    }
   

    


calling()


 } , [])



    return(
        <div>
            {
                fromH.map( (item)=>{
                    return(
                        <div key={item.id}>
                            <h1> ID : {item.userId} </h1>
                            <h1> Titile : {item.title} </h1>
                        </div>
                    )
                })
            }
        </div>
    )
}