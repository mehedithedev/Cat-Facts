import React, { useEffect, useState } from 'react'
import  Axios  from 'axios'

function facts() {
    const [factOfCat, setFactOfCat]= useState('')
    // fetch('https://catfact.ninja/fact')
    //     .then((response)=> response.json())
    //     .then((data)=>{
    //         console.log(data)
    //     })

    const fetchCatFact=()=>{
        Axios.get("https://catfact.ninja/fact")
        .then((res)=>setFactOfCat(res.data.fact))
    }
    // Let's use axios to get things done:
    useEffect(()=>{
        fetchCatFact()
    }, [])

  

    return (
    <div>
        <h1>{factOfCat}</h1>

        <button
            onClick={fetchCatFact}
        >Get Cat fact</button>
    </div>
  )
}

export default facts