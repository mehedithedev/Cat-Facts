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
    <div className='catfacts'>
        <h1>Cat Facts 😸</h1>
        <h2>{factOfCat}</h2>

        <button
            onClick={fetchCatFact}
        >meow 🐱</button>
    </div>
  )
}

export default facts